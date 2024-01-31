import styles from "./showQuestionAnalysis.module.css";

export default function ShowQuestionAnalysis({ quizData, selectedQuestionId }) {
  return (
    <>
      {quizData.map((quiz) => {
        if (selectedQuestionId === quiz._id) {
          const createdAtDate = quiz.createdAt_date;
          const parsedDate = new Date(createdAtDate);

          const formattedDate = `${parsedDate.toLocaleString("default", {
            month: "short",
          })} ${parsedDate.getDate()} ${parsedDate.getFullYear()}`;

          return (
            <div key={quiz._id} className={styles.question_analysis_container}>
              <div className={styles.header_wrapper}>
                <p className={styles.quizTitle}>
                  {quiz.quizTitle} Question Analysis
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    color: "#FF5D01",
                    alignItems: "flex-end",
                  }}
                >
                  <p>Created on: {formattedDate}</p>
                  <p>Impressions: {quiz.no_of_impressions}</p>
                </div>
              </div>
              {quiz.questions.map((question) => (
                <div key={question._id} className={styles.content_wrapper}>
                  <div className={styles.question}>
                    {question.questionTitle}
                  </div>
                  {quiz.quizType === "Q & A" && (
                    <div className={styles.analysis_cards_wrapper}>
                      <div className={styles.total_attepmted}>
                        <p>
                          {question.questions_attempted_correctly +
                            question.questions_attempted_incorrectly}
                        </p>
                        <p>People Attempted the Question</p>
                      </div>
                      <div className={styles.correct_attemption}>
                        <p>{question.questions_attempted_correctly}</p>
                        <p>People Attempted Correctly</p>
                      </div>
                      <div className={styles.incorrect_attempted}>
                        <p>{question.questions_attempted_incorrectly}</p>
                        <p>People Attempted Incorrectly</p>
                      </div>
                    </div>
                  )}

                  {quiz.quizType === "Poll Type" && (
                    <div className={styles.analysis_cards_wrapper}>
                      {question.options.map((option, index) => (
                        <div className={styles.total_attepmted}>
                          <p>
                            <span style={{fontSize:"22px", marginRight:"1rem", color:"#474444", fontWeight:"600"}}>
                              {question.questions_attempted_correctly +
                                question.questions_attempted_incorrectly}
                            </span>
                            option {index + 1}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  <hr style={{ color: "#D7D7D7", marginTop: "1rem" }} />
                </div>
              ))}
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}
