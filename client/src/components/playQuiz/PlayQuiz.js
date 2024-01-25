// import { useState } from "react";
import styles from "./playQuiz.module.css";
import { GetQuizDataById } from "../../apis/quiz";
import { useState, useEffect } from "react";

export default function PlayQuiz() {
  const [quizData, setQuiData] = useState({});

  useEffect(() => {
    const fetchQuizData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const quizId = urlParams.get("quizId");
      try {
        const quizData = await GetQuizDataById(quizId);
        setQuiData(quizData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuizData();
  }, []);

  console.log(quizData.data);

  return (
    <>
      <div className={styles.playQuiz_container}>
        <div className={styles.quiz_questions_wrapper}>
          <div className={styles.questions_header}>
            <div>01/01</div>
            <div style={{ color: "#f84242" }}>00:00 sec</div>
          </div>
          <div className={styles.questions}>
            <p style={{ margin: "0" }}>Question</p>
            <div className={styles.options_wrapper}>
              <div className={styles.option}>option</div>
              <div className={styles.option}>option</div>
              <div className={styles.option}>option</div>
              <div className={styles.option}>option</div>
            </div>
          </div>
          <button className={styles.submit_quiz_btn}>Submit</button>
        </div>
      </div>
    </>
  );
}
