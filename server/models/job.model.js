import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        jobType: {
            type: String,
            enum: ["Full-time", "Part-time", "Contract", "Internship", "Temporary"],
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        salaryRange: {
            type: String,
        },
        experienceLevel: {
            type: String,
            enum: ["Entry-level", "Mid-level", "Senior-level"],
        },
        applyLink: {
            type: String,
        },
        contactEmail: {
            type: String,
            required: true,
        },
        applicationDeadline: {
            type: Date,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        status: {
            type: String,
            enum: ["Open", "Closed", "Pending"],
            default: "Open",
        },
    },
    { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
