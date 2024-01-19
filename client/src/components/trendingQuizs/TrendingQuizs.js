import styles from "./trendingQuizs.module.css";
import eyeImg from "../../images/eye.png";

export default function TrendingQuizs() {
  return (
    <>
      <div className={styles.trendingQuizs_cards_container}>
        <h3 className={styles.trendingQuiz_title}>Trending Quizs</h3>
        <div className={styles.quizCrads_container}>
          <div className={styles.quiz_card}>
            <div style={{display:"flex"}}>
              <p>Quiz 1</p>
              <p>
                667<img src={eyeImg} alt="eyeImg"></img>
              </p>
            </div>
            <p>Created on: 04 Sep, 2023</p>
          </div>
        </div>
      </div>
    </>
  );
}
