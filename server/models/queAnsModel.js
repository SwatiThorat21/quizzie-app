const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  quizTitle: {
    type: String,
    required: true,
  },
  quizType: {
    type: String,
    enum: ["Q&A-type", "Poll-type"],
    required: true,
  },
  timer_for_eachQuestion: {
    type: Number,
    required: true,
  },
  questions: [
    new mongoose.Schema({
      questionTitle: {
        type: String,
        required: true,
      },
      optionType: {
        type: String,
        enum: ["text", "imgUrl", "text&imgUrl"],
        required: true,
      },
      options: [
        new mongoose.Schema({
          text: {
            type: String,
          },
          imgUrl: {
            type: String,
          },
        }),
      ],
    }),
  ],
});
