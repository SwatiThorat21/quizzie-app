import styles from "./trendingQuizs.module.css";
import eyeImg from "../../images/eye.png";

export default function TrendingQuizs({ quizData }) {
  const filteredQuizData = quizData.filter(
    (quiz) => quiz.no_of_impressions > 10
  );

  return (
    <>
      <div className={styles.trendingQuizs_cards_container}>
        <h2 className={styles.trendingQuiz_title}>Trending Quizs</h2>
        <div className={styles.quizCrads_container}>
          {quizData.length === 0 ? (
            <p style={{ color: "#f8792f" }}>
              You haven't created any Quiz, Click on Create Quiz to create your
              first Quiz
            </p>
          ) : (
            filteredQuizData.map((quiz, index) => {
              const createdAtDate = quiz.createdAt_date;
              const parsedDate = new Date(createdAtDate);

              const formattedDate = `${parsedDate.toLocaleString("default", {
                month: "short",
              })} ${parsedDate.getDate()} ${parsedDate.getFullYear()}`;

              return (
                <div className={styles.quiz_card} key={index}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ fontSize: "1.3rem" }}>{quiz.quizTitle}</p>
                    <p
                      style={{
                        color: "#ff5d01",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                        fontWeight: "600",
                      }}
                    >
                      {quiz.no_of_impressions}
                      <img src={eyeImg} alt="eyeImg"></img>
                    </p>
                  </div>
                  <p style={{ color: "#60b84b", marginTop: "5px" }}>
                    Created on: {formattedDate}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
