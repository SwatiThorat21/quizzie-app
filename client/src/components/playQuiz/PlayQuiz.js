import styles from "./playQuiz.module.css";
import { GetQuizDataById, logQuizImpression } from "../../apis/quiz";
import { useState, useEffect } from "react";
import { logAnswer } from "../../apis/quiz";

export default function PlayQuiz({
  setQuizData,
  quizData,
  setCurrentQuesIndex,
  currentQuesIndex,
  setQuizSuccess,
  setCorrectAnswersCount,
}) {
  const [answerIndexSelected, setAnswerIndexSelected] = useState(undefined);
  // console.log(quizData.data?.timer_for_eachQuestion)

  const quizObj = quizData.data;
  const timer = quizObj?.timer_for_eachQuestion;

  console.log(timer);
  const [timeLeft, setTimeLeft] = useState(timer);
  console.log(timeLeft);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

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
    console.log(questionsArray);
    const correctAnswerIndex =
      questionsArray[currentQuesIndex]?.correct_answer_index;

    if (optionIndex === correctAnswerIndex) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    }
  }

  const handleNext = () => {
    if (answerIndexSelected === undefined) return;
    const quizObject = quizData.data;
    const questionsArray = quizObject.questions;
    const questionId = questionsArray?.[currentQuesIndex]._id;
    logAnswer(questionId, answerIndexSelected);
    setCurrentQuesIndex((prevIndex) =>
      questionsArray.length === prevIndex + 1 ? prevIndex : prevIndex + 1
    );
    if (questionsArray.length === currentQuesIndex + 1) {
      setQuizSuccess(true);
    }
    setAnswerIndexSelected(undefined);
  };

  const quizObject = quizData.data;

  if (!quizObject) {
    return null;
  }

  console.log(quizObject.questions);

  return (
    <>
      <div className={styles.playQuiz_container}>
        {quizObject.questions.map((question, index) => (
          <div className={styles.quiz_questions_wrapper} key={index}>
            <div className={styles.questions_header}>
              <div>
                {currentQuesIndex}/{quizObject.questions.length}
              </div>
              <div style={{ color: "#f84242" }}>{timeLeft}sec</div>
            </div>
            <div className={styles.questions}>
              <p style={{ margin: "0" }}>{question.questionTitle}</p>
              <div className={styles.options_wrapper}>
                {question.options.map((option, optionIndex) => {
                  return (
                    <div key={optionIndex}>
                      {option.text && (
                        <div
                          className={`${styles.option} ${
                            answerIndexSelected === optionIndex
                              ? styles.selected
                              : ""
                          }`}
                          onClick={() => handleAnswerSelection(optionIndex)}
                        >
                          {option.text}
                        </div>
                      )}

                      {option.imageUrl && (
                        <div
                          className={`${styles.option} ${
                            answerIndexSelected === optionIndex
                              ? styles.selected
                              : ""
                          }`}
                          onClick={() => handleAnswerSelection(optionIndex)}
                        >
                          <img src={option.imageUrl} alt="imageUrl"></img>
                        </div>
                      )}

                      {option.text && option.imageUrl && (
                        <div
                          className={`${styles.option} ${
                            answerIndexSelected === optionIndex
                              ? styles.selected
                              : ""
                          }`}
                          onClick={() => handleAnswerSelection(optionIndex)}
                        >
                          <div>{option.text}</div>
                          <img src={option.imageUrl} alt="imageUrl"></img>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            {currentQuesIndex < quizObject.questions.length - 1 ? (
              <button className={styles.submit_quiz_btn} onClick={handleNext}>
                Next
              </button>
            ) : (
              <button className={styles.submit_quiz_btn} onClick={handleNext}>
                Submit
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
