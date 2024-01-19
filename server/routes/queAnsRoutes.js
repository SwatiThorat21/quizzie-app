const express = require("express");
const router = express.Router();
const QandAQuizData = require("../models/queAnsModel");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.post("/createQAQuiz", isLoggedIn, async (req, res) => {
  try {
    const { quizTitle, quizType, timer_for_eachQuestion, questions } = req.body;

    await QandAQuizData.create({
      quizTitle,
      quizType,
      timer_for_eachQuestion,
      questions,
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
