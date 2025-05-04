import mongoose from "mongoose";

const applicationRequestSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job", // Reference to the Job model
      required: true,
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    coverLetter: {
      type: String, // Optional field for cover letters
      trim: true,
    },
    resume: {
      type: String, // URL or file path for the resume
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Shortlisted", "Rejected", "Hired"],
      default: "Pending",
    },
    notes: {
      type: String, // Notes added by the employer/admin
    },
    feedback: {
      type: String, // Feedback for the applicant
    },
  },
  { timestamps: { createdAt: "appliedAt", updatedAt: "updatedAt" } }
);

applicationRequestSchema.index({ job: 1, applicant: 1 }, { unique: true });


const ApplicationRequest = mongoose.model("ApplicationRequest", applicationSchema);

export default ApplicationRequest;
