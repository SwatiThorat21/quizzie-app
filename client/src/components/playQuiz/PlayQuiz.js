import React, { useEffect } from "react";
import styles from "./playQuiz.module.css";
import { GetQuizDataById, logQuizImpression } from "../../apis/quiz";
import { logAnswer } from "../../apis/quiz";
import { logVotingCount } from "../../apis/quiz";
import { useState } from "react";

export default function PlayQuiz({
  setQuizData,
  quizData,
  setCurrentQuesIndex,
  currentQuesIndex,
  setQuizSuccess,
  setPollSuccess,
  setCorrectAnswersCount,
  answerIndexSelected,
  setAnswerIndexSelected,
}) {
  const [timeLeftArray, setTimeLeftArray] = useState([]);

  useEffect(() => {
    if (quizData?.data?.questions) {
      setTimeLeftArray(
        quizData.data.questions.map(
          () => quizData?.data?.timer_for_eachQuestion
        )
      );
    }
  }, [quizData]);

  useEffect(() => {
    if (quizData?.data?.timer_for_eachQuestion) {
      const intervalId = setInterval(() => {
        setTimeLeftArray((prevArray) => {
          const newArray = [...prevArray];
          if (newArray[currentQuesIndex] > 0){
            newArray[currentQuesIndex] -= 1;
          }
          return newArray;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [currentQuesIndex, quizData]);
  useEffect(() => {
    const fetchQuizData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const quizId = urlParams.get("quizId");
      try {
        const quizData = await GetQuizDataById(quizId);
        setQuizData(quizData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuizData();
  }, [setQuizData]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const quizId = urlParams.get("quizId");
    logQuizImpression(quizId);
  }, []);

  function handleAnswerSelection(optionIndex) {
    setAnswerIndexSelected(optionIndex);
    const quizObject = quizData.data;
    const questionsArray = quizObject.questions;
    const correctAnswerIndex =
      questionsArray[currentQuesIndex]?.correct_answer_index;

    if (optionIndex === correctAnswerIndex) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    }
  }

  const handleNext = async () => {
    if (answerIndexSelected === undefined) {
      alert("Please select an option");
      return;
    }

    const quizObject = quizData.data;
    const questionsArray = quizObject.questions;
    const questionId = questionsArray?.[currentQuesIndex]._id;

    if (quizObject.quizType === "Poll Type") {
      await logVotingCount(
        quizData?.data?._id,
        currentQuesIndex,
        answerIndexSelected
      );
      setPollSuccess(true);
    } else {
      await logAnswer(questionId, answerIndexSelected);
      if (questionsArray.length === currentQuesIndex + 1) {
        setQuizSuccess(true);
      } else {
        setCurrentQuesIndex((prevIndex) => prevIndex + 1);
        setAnswerIndexSelected(undefined);
      }
    }
  };

  const quizObject = quizData.data;

  if (!quizObject) {
    return null;
  }

  const question = quizObject.questions[currentQuesIndex];

  return (
    <div className={styles.playQuiz_container}>
      <div className={styles.quiz_questions_wrapper}>
        <div className={styles.questions_header}>
          <div>
            {currentQuesIndex + 1}/{quizObject.questions.length}
          </div>
          {quizData?.data?.quizType === "Q & A" && (
            <div style={{ color: "#f84242", fontWeight: "600" }}>
              {timeLeftArray[currentQuesIndex] !== "OFF" && (
                <span>{timeLeftArray[currentQuesIndex]}</span>
              )}
              <span style={{ marginLeft: "5px" }}>
                {timeLeftArray[currentQuesIndex] === "OFF" ? "OFF" : "Sec"}
              </span>
            </div>
          )}
        </div>
        <div className={styles.questions}>
          <p style={{ margin: "0" }}>{question.questionTitle}</p>
          <div className={styles.options_wrapper_text}>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                {question.optionType === "Text" && option.text !== "" && (
                  <div
                    className={`${styles.option} ${
                      answerIndexSelected === optionIndex ? styles.selected : ""
                    }`}
                    onClick={() => handleAnswerSelection(optionIndex)}
                  >
                    {option.text}
                  </div>
                )}

                {question.optionType === "Image URL" && option.imageUrl !== "" && (
                  <div
                    className={`${styles.option} ${styles.ImageOption} ${
                      answerIndexSelected === optionIndex ? styles.selected : ""
                    }`}
                    onClick={() => handleAnswerSelection(optionIndex)}
                  >
                    <img
                      src={option.imageUrl}
                      className={styles.playQuizImg}
                      alt="imageUrl"
                    ></img>
                  </div>
                )}

                {question.optionType === "Text & Image URL" &&
                  option.text !== "" &&
                  option.imageUrl !== "" && (
                    <div
                      className={`${styles.option} ${styles.ImageOption} ${
                        answerIndexSelected === optionIndex
                          ? styles.selected
                          : ""
                      }`}
                      onClick={() => handleAnswerSelection(optionIndex)}
                    >
                      <div className={styles.textImg_wrapper}>
                        <div>{option.text}</div>
                        <img
                          src={option.imageUrl}
                          alt="imageUrl"
                          className={styles.playQuizImg}
                        ></img>
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
        <button className={`${styles.submit_quiz_btn}`} onClick={handleNext}>
          {currentQuesIndex === quizObject.questions.length - 1
            ? "Submit"
            : "Next"}
        </button>
      </div>
    </div>
  );
}
