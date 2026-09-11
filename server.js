import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import invoiceRoutes from "./routes/invoiceRoutes.js";
import quotationRoutes from "./routes/quotationRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({
  limit: "50mb",
  extended: true
}));

app.use("/uploads/gallery", (req, res) => {
  res.status(403).json({
    message: "Direct access to gallery resources is forbidden"
  });
});

app.use("/uploads/blogs", (req, res) => {
  res.status(403).json({
    message: "Direct access to blog resources is forbidden"
  });
});

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/quotations", quotationRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/clients", clientRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    console.log("📦 Database:", mongoose.connection.name);
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

app.get("/", (req, res) => {
  res.json({
    message: "🚀 API Running"
  });
});

const PORT = process.env.PORT || 5000;

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📂 Uploads → /uploads`);
  console.log(`🛡️ SECURITY UPDATE: Password Hashing is ACTIVE`);
});