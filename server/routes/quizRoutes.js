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

router.get("/quiz-data", async (req, res) => {
  try {
    const quizData = await QuizsData.find().sort({ createdAt: -1 });
    res.json({ quizData });
  } catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
});

router.get("/get-quiz/:quizId", async (req, res) => {
  try {
    const { quizId } = req.params;

    const quizData = await QuizsData.findById(quizId);

    if (!quizData) {
      return res.status(404).json({
        status: "FAILED",
        message: "Quiz not found",
      });
    }

    res.status(200).json({
      data: quizData,
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: error.message,
    });
  }
});

router.patch("/log-impression/:quizId", async (req, res) => {
  try {
    const { quizId } = req.params;

    await QuizsData.findByIdAndUpdate(quizId, {
      $inc: { no_of_impressions: 1 },
    });

    const updatedQuizData = await QuizsData.findById(quizId);

    res.status(200).json({
      status: "success",
      message: "updated sucessfully",
      data: updatedQuizData,
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: error.message,
    });
  }
});

router.patch("/log-answer", async (req, res) => {
  try {
    const { questionId, index_selected_by_user } = req.body;

    const quizData = await QuizsData.findOne({ "questions._id": questionId });

    console.log(quizData);

    if (!quizData) {
      return res.status(404).json({
        status: "FAILED",
        message: "Quiz data not found",
      });
    }
    const question = quizData.questions.find(
      (q) => q._id.toString() === questionId
    );
    const correct_answer_index = question.correct_answer_index;

    const updateFields = {
      $inc: {
        "questions.$.questions_attempted_correctly":
          parseInt(index_selected_by_user) === correct_answer_index ? 1 : 0,
        "questions.$.questions_attempted_incorrectly":
          parseInt(index_selected_by_user) !== correct_answer_index ? 1 : 0,
      },
    };

    const updatedQuizData = await QuizsData.findOneAndUpdate(
      { "questions._id": questionId },
      updateFields,
      { new: true }
    );

    res.status(200).json({
      status: "success",
      message: "updated successfully",
      data: updatedQuizData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "FAILED",
      message: error.message,
    });
  }
});

router.delete("/:quizId", async (req, res) => {
  try {
    const { quizId } = req.params;

    const deletedQuiz = await QuizsData.findByIdAndDelete(quizId);

    if (!deletedQuiz) {
      return res.status(404).json({
        status: "FAILED",
        message: "Quiz not found",
      });
    }

    res.status(200).json({
      message: "quiz deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: error.message,
    });
  }
});

module.exports = router;
