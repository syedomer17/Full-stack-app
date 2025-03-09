import express from "express";
import userModel from "../../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "config";

const router = express.Router();

const JWT = config.get("JWT_KEY");

router.post("/register", async (req, res) => {
  try {
    let { fullName, email, phone, password, role } = req.body;
    // Schema check
    if (!fullName || !email || !phone || !password) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }
    // duplicate check

    let emailCheck = await userModel.findOne({ email });
    if (emailCheck) {
      return res.status(400).json({ msg: "User Email already exists" });
    }
    let phoneCheck = await userModel.findOne({ phone });
    if (phoneCheck) {
      return res.status(400).json({ msg: "User Phone already exists" });
    }

    let hashPassword = await bcrypt.hash(password, 12);
    password = hashPassword;

    await userModel.create({
      fullName,
      email,
      phone,
      password,
      role,
    });

    res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    let token = jwt.sign({ id: user._id }, JWT, {
      expiresIn: "1h",
    });
    console.log(token);
    res.status(200).json({ msg: "Login Success", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

export default router;
