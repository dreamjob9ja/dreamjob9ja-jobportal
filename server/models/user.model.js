import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isEmailConfirmed: {
    type: Boolean,
    default: false, // Default to false until email is confirmed
  },
  emailConfirmationToken: {
    type: String,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  headline: {
    type: String,
    default: "Dreamjob9ja User",
  },
  location: {
    type: String,
    default: "",
  },
  about: {
    type: String,
    default: "",
  },
  skills: [String],
  experience: [
    {
      title: String,
      company: String,
      startDate: Date,
      endDate: Date,
      description: String,
    },
  ],
  education: [
    {
      school: String,
      fieldOfStudy: String,
      startYear: Number,
      endYear: Number,
    },
  ],
  connections: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;