import styles from "./quizSuccess.module.css";
import trophyImg from "../../images/trophy_img.png";

export default function QuizSuccess({quizData, currentQuesIndex}) {
  const quizObject = Object.values(quizData);
  const questionsArray = quizObject[currentQuesIndex]?.questions[currentQuesIndex];
  console.log(questionsArray)

  return (
    <>
      <div className={styles.successPage_container}>
        <div className={styles.successPage_content}>
          <h2>Congrats Quiz is completed</h2>
          <img src={trophyImg} alt="trophyImg"></img>
          <div className={styles.quiz_score_wrapper}>
            Your Score is<span className={styles.score}>1/{questionsArray.length}</span>
          </div>
        </div>
      </div>
    </>
  );
}
