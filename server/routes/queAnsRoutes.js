const express = require("express");
const router = express.Router();
const QandAQuizData = require("../models/queAnsModel");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.post("/create-qa-quiz", isLoggedIn, async (req, res) => {
  try {
    const {
      userId,
      quizTitle,
      quizType,
      timer_for_eachQuestion,
      createdAt_date,
      questions,
    } = req.body;

    await QandAQuizData.create({
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
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: error.message,
    });
  }
});

module.exports = router;
