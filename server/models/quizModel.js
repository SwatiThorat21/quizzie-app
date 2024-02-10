const mongoose = require("mongoose");

const optionsSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  voting_count: {
    type: Number,
  },
});

const questionsSchema = new mongoose.Schema({
  questionTitle: {
    type: String,
    required: true,
  },
  optionType: {
    type: String,
    enum: ["Text", "Image URL", "Text & Image URL"],
    required: true,
  },
  options: [optionsSchema],
  correct_answer_index: {
    type: Number,
  },
  questions_attempted_correctly: {
    type: Number,
  },
  questions_attempted_incorrectly: {
    type: Number,
  },
});

const quizSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  quizTitle: {
    type: String,
    required: true,
  },
  quizType: {
    type: String,
    enum: ["Q & A", "Poll Type"],
    required: true,
  },
  timer_for_eachQuestion: {
    type: String,
    enum: ["OFF", 5, 10],
  },
  no_of_impressions: {
    type: Number,
  },
  createdAt_date: {
    type: Date,
  },
  questions: [questionsSchema],
});

module.exports = mongoose.model("QuizsData", quizSchema);
