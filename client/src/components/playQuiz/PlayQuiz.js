// import { useState } from "react";
import styles from "./playQuiz.module.css";
import { GetQuizDataById, logQuizImpression } from "../../apis/quiz";
import { useState, useEffect } from "react";

export default function PlayQuiz() {
  const [quizData, setQuizData] = useState({});
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState("");
  // const [impressions, setImpressions] = useState(0);

  useEffect(() => {
    const fetchQuizData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const quizId = urlParams.get("quizId");
      try {
        const quizData = await GetQuizDataById(quizId);
        setQuizData(quizData);

        // const timerString = quizData.timer_for_eachQuestion;
        // const timerDuration = parseInt(timerString, 10) || 0;
        // setTimeRemaining(timerDuration);
        // console.log(timerDuration);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuizData();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const quizId = urlParams.get("quizId");
    logQuizImpression(quizId);
  }, []);

  useEffect(() => {
    if (timeRemaining > 0) {
      const timerId = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [timeRemaining]);

  const quizObject = Object.values(quizData);

  const handleNext = () => {
    setCurrentQuesIndex((prevIndex) => prevIndex + 1);
  };

  // console.log(quizData);

  const handleSubmit = () => {};
  if (!Object.keys(quizData).length) {
    return null;
  }

  if (!quizObject) {
    return null;
  }

  return (
    <>
      <div className={styles.playQuiz_container}>
        {Object.values(quizData).map((data, index) => (
          <div className={styles.quiz_questions_wrapper} key={index}>
            <div className={styles.questions_header}>
              <div>
                {currentQuesIndex}/{data.questions.length}
              </div>
              <div style={{ color: "#f84242" }}>{timeRemaining} sec</div>
            </div>
            <div className={styles.questions}>
              <p style={{ margin: "0" }}>
                {data.questions[currentQuesIndex].questionTitle}
              </p>
              <div className={styles.options_wrapper}>
                {data.questions[currentQuesIndex].options.map(
                  (option, index) => {
                    return (
                      <div className={styles.option} key={index}>
                        {option.text}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            {currentQuesIndex < data.questions.length - 1 ? (
              <button className={styles.submit_quiz_btn} onClick={handleNext}>
                Next
              </button>
            ) : (
              <button className={styles.submit_quiz_btn} onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        ))}
        ;{/* })} */}
      </div>
    </>
  );
}
