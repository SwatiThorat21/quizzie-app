const express = require("express");
const router = express.Router();
const QuizsData = require("../models/quizModel");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.post("/create-quiz", isLoggedIn, async (req, res) => {
  try {
    const {
      userId,
      quizTitle,
      quizType,
      timer_for_eachQuestion,
      createdAt_date,
      questions,
    } = req.body;

    const quizData = await QuizsData.create({
      userId: userId,
      quizTitle: quizTitle,
      quizType: quizType,
      timer_for_eachQuestion: timer_for_eachQuestion,
      createdAt_date: createdAt_date,
      questions: questions,
    });
    res.status(200).json({
      status: "SUCCESS",
      message: "You have sucessfully created quiz!",
      data: req.body,
      quizId: quizData._id.toString(),
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: error.message,
    });
  }
});

router.get("/get-quiz/:quizId", async (req, res) => {
  try {
    const { quizId } = req.params;

    const quizData = await QuizsData.findById(quizId);
    console.log(quizData);

    if (!quizData) {
      return res.status(404).json({
        status: "FAILED",
        message: "Quiz not found",
      });
    }

    res.status(200).json({
      status: "SUCCESS",
      message: "Quiz data retrieved successfully.",
      data: quizData,
    });
    
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: error.message,
    });
  }
});

module.exports = router;
