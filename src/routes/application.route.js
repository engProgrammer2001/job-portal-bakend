import express from "express";
const router = express.Router();
import isAuthenticated from "../middleware/authenticate.js";
import {
  applyForJob,
  getAllApplications,
  getApplicants,
  updateApplicationStatus,
  upload,
  getTotalApplications,
  getAllApplicationsByEmployer,
} from "../controller/application.controller.js";

// router.get("/apply-for-job/:id", isAuthenticated, applyForJob);
router.post(
  "/apply-for-job/:id",
  isAuthenticated,
  upload.single("resume"),
  applyForJob
);
router.get(
  "/get-all-applications-of-login-employer",
  isAuthenticated,
  getAllApplications
);
router.get("/get-applicants/:id", isAuthenticated, getApplicants);
router.get("/get-total-applications", getTotalApplications);
router.put(
  "/update-application-status/:id",
  isAuthenticated,
  updateApplicationStatus
);
router.get(
  "/get-AllApplications-By-Employer/:id",
  isAuthenticated,
  getAllApplicationsByEmployer
);

export default router;
