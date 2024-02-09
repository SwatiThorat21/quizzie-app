import styles from "./quizSuccess.module.css";
import trophyImg from "../../images/trophy_img.png";

export default function QuizSuccess({
  quizData,
  correctAnswersCount,
  timeLeft
}) {
  const quizObject = quizData.data;
  const questionsArray = quizObject.questions;
  console.log(questionsArray);

  return (
    <>
      <div className={styles.successPage_container}>
        <div className={styles.successPage_content}>
          <div style={{ fontWeight: "600" }} className={styles.sucessMsg}>Congrats Quiz is completed</div>
          <img
            src={trophyImg}
            alt="trophyImg"
            className={styles.trophyImg}
          ></img>
          <div className={styles.quiz_score_wrapper}>
            Your Score is
            <span className={styles.score}>
              {timeLeft === 0 ?  0: correctAnswersCount}/
              {questionsArray.length}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
