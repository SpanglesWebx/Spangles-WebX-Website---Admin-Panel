import mongoose from "mongoose";
import Application from "./models/Application.js";
import Counter from "./models/Counter.js";
import dotenv from "dotenv";

dotenv.config();

const migrateApplicantIds = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const applications = await Application.find({
      $or: [
        { applicantId: { $exists: false } },
        { applicantId: null },
        { applicantId: "" },
      ],
    }).sort({ createdAt: 1 });

    let counter = await Counter.findOne({ name: "applicantId" });

    if (!counter) {
      counter = await Counter.create({ name: "applicantId", sequence: 0 });
    }

    for (const application of applications) {
      counter.sequence += 1;
      application.applicantId = `APP${String(counter.sequence).padStart(4, "0")}`;
      await application.save();
      console.log(`${application.yourName} → ${application.applicantId}`);
    }

    await counter.save();

    console.log(`✅ Migrated ${applications.length} applications`);
    console.log(`✅ Current counter: ${counter.sequence}`);

    await mongoose.disconnect();
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
};

migrateApplicantIds();