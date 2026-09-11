import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import Counter from "../models/Counter.js";

import {
  createApplication,
  getApplications,
  getApplicationPDF,
  updateApplicationStatus,
} from "../controllers/applicationController.js";

const router = express.Router();

/* --------------------------------------------------- */
const UPLOADS_DIR = path.join(process.cwd(), "uploads");

if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

/* --------------------------------------------------- */
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename: async (req, file, cb) => {
    try {
      const counter = await Counter.findOneAndUpdate(
        { name: "applicantId" },
        { $inc: { sequence: 1 } },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );

      const applicantId = `APP${String(counter.sequence).padStart(4, "0")}`;

      req.applicantId = applicantId;

      const extension = path.extname(file.originalname).toLowerCase();

      cb(null, `${applicantId}${extension}`);
    } catch (error) {
      cb(error);
    }
  },
});

/* --------------------------------------------------- */
const fileFilter = (req, file, cb) => {
  const allowed = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/jpg",
  ];

  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF/Image files are allowed"));
  }
};

/* --------------------------------------------------- */
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 },
});

/* --------------------------------------------------- */
/* ✅ FIXED ROUTE WITH ERROR HANDLING */
router.post("/", (req, res, next) => {
  upload.single("resume")(req, res, function (err) {
    if (err) {
      console.error("🔥 Multer error:", err.message);
      return res.status(400).json({ message: err.message });
    }
    next();
  });
}, createApplication);

/* --------------------------------------------------- */
router.get("/", getApplications);
router.get("/resume/:id", getApplicationPDF);
router.put("/:id", updateApplicationStatus);

export default router;