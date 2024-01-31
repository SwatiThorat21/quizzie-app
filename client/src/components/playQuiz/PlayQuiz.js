import styles from "./playQuiz.module.css";
import { GetQuizDataById, logQuizImpression } from "../../apis/quiz";
import { useEffect } from "react";
import { logAnswer } from "../../apis/quiz";

export default function PlayQuiz({
  setQuizData,
  quizData,
  setCurrentQuesIndex,
  currentQuesIndex,
  setQuizSuccess,
  setCorrectAnswersCount,
  answerIndexSelected,
  setAnswerIndexSelected,
  timeLeft,
  setTimeLeft,
}) {
  useEffect(() => {
    if (quizData?.data?.timer_for_eachQuestion) {
      setTimeLeft(quizData.data.timer_for_eachQuestion);
    }
  }, [quizData, setTimeLeft]);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, setTimeLeft]);

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
    if (answerIndexSelected === undefined) {
      alert("Please select option");
      return;
    }
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
              <div style={{ color: "#f84242", fontWeight: "600" }}>
                {timeLeft}
                <span style={{ marginLeft: "5px" }}>sec</span>
              </div>
            </div>
            <div className={styles.questions}>
              <p style={{ margin: "0" }}>{question.questionTitle}</p>
              <div className={styles.options_wrapper_text}>
                {question.options.map((option, optionIndex) => {
                  return (
                    <div key={optionIndex}>
                      {question.optionType === "Text" && (
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

                      {question.optionType === "Image URL" && (
                        <div
                          className={`${styles.option} ${styles.ImageOption} ${
                            answerIndexSelected === optionIndex
                              ? styles.selected
                              : ""
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

                      {question.optionType === "Text & Image URL" && (
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
                            <img src={option.imageUrl} alt="imageUrl" className={styles.playQuizImg}></img>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            {currentQuesIndex < quizObject.questions.length - 1 ? (
              <button
                className={`${styles.submit_quiz_btn}`}
                onClick={handleNext}
              >
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
