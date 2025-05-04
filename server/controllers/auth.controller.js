import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { sendWelcomeEmail, sendConfirmationEmail } from '../emails/emailHandlers.js';

export const signup = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }


    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      username,
      email,
      password: hashedPassword
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "3d" });

    res.cookie("jwt-dreamjob9ja", token, {
      httpOnly: true, // prevent XSS attack
      maxAge: 3 * 24 * 60 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Use "none" for production, "lax" for local
      secure: process.env.NODE_ENV === "production" ? true : false, // prevents man-in-the-middle attacks
    });

    // Generate email confirmation token
    const emailConfirmationToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token valid for 1 hour
    );

    // Create confirmation link
    const confirmationLink = `${process.env.CLIENT_URL}/confirm-email?token=${emailConfirmationToken}`;

    res.status(201).json({ message: "User registered successfully" });

    // send email-confirmation email

    try {
      await sendConfirmationEmail(email, name, confirmationLink);
    } catch (emailError) {
      console.error("Error sending email confirmation:", emailError);
    }

    // send welcome email
    // const profileUrl = process.env.CLIENT_URL + "/profile/" + user.username;

    // try {
    //   await sendWelcomeEmail(user.email, user.name, profileUrl);
    // } catch (emailError) {
    //   console.error("Error sending welcome Email", emailError);
    // }

  } catch (error) {

    console.log("Error in signup: ", error.message);
    res.status(500).json({ message: "Internal server error" });

  }
}

export const login = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Check if user exists (by username or email)
    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid Username or Password!" });
    }

    if (!user.isEmailConfirmed) {
      return res.status(403).json({ message: "Please confirm your email to log in." });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Username or Password!" });
    }

    // Create and send token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "3d" });
    res.cookie("jwt-dreamjob9ja", token, {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    res.json({ message: "Logged in successfully" });
  } catch (error) {
    console.error("Error in login controller:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const logout = (req, res) => {
  res.clearCookie("jwt-dreamjob9ja");
  res.json({ message: "Logged out successfully" });
}

export const getCurrentUser = async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    console.error("Error in getCurrentUser controller:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// export const confirmEmail = async (req, res) => {
//   const { token } = req.params;

//   try {
//     // Verify the token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.userId);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Mark email as confirmed
//     user.isEmailConfirmed = true;
//     await user.save();

//     res.status(200).json({ message: "Email confirmed successfully!" });
//   } catch (error) {
//     console.error("Error confirming email:", error);
//     res.status(400).json({ message: "Invalid or expired token" });
//   }
// };

export const confirmEmail = async (req, res) => {
  try {
    const { token } = req.params;

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    // Find user and update `isEmailConfirmed`
    const user = await User.findByIdAndUpdate(userId, { isEmailConfirmed: true }, { new: true });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token." });
    }

    res.json({ message: "Email confirmed successfully! You can now log in." });
  } catch (error) {
    console.error("Error confirming email:", error);
    res.status(500).json({ message: "Server error" });
  }
};