const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const dotenv = require("dotenv").config();

//error handler middlewawre

const errorHandler = (res, error) => {
  res.status(500).json({
    error: "Something went wrong",
  });
};

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        error: "All fields are required !",
      });
    }

    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        error: "Email is already registered",
      });
    }

    if (password !== confirmPassword) {
      res.json({
        status: "FAILED",
        message: "Password doesn't matched !",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });
    res.json({
      status: "SUCCESS",
      message: "You have registered in sucessfully !!",
      user: email,
      recruiterName: name,
    });
  } catch (error) {
    errorHandler(res, error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        error: "Emaill and password are required!",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    if (user) {
      let hasPasswordMatch = await bcrypt.compare(password, user.password);
      if (hasPasswordMatch) {
        const jwToken = jwt.sign(user.toJSON(), process.env.JWT_SCRETEKEY, {
          expiresIn: 45000,
        });
        res.json({
          status: "SUCCESS",
          message: "You've logged in sucessfully !!",
          jwToken,
          recruiterName: user.name,
          user: email,
        });
      } else {
        res.json({
          status: "FAILED",
          message: "Incorrect credentials !",
        });
      }
    } else {
      res.json({
        status: "FAILED",
        message: "User does not exist !",
      });
    }
  } catch (error) {
    console.log(error);
    errorHandler(res, error);
  }
});

module.exports = router;
