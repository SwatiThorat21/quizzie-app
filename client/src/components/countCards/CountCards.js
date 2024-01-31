import styles from "./countCards.module.css";

export default function CountCards({ quizData }) {
  function formatImpressions(number) {
    if (number >= 1000) {
      return `${(number / 1000).toFixed(1)}k`;
    } else {
      return number.toString();
    }
  }

  return (
    <>
      <div className={styles.count_cards_container}>
        <div
          className={styles.count_card}
          style={{ color: "#ff5d01", width: "85px" }}
        >
          {quizData.length > 0 ? (
            <p className={styles.count_info}>
              <span style={{ marginRight: "8px", fontSize: "2.2rem" }}>
                {quizData.length}
              </span>
              Quiz Created
            </p>
          ) : (
            <p className={styles.count_info}>
              <span style={{ marginRight: "8px", fontSize: "2.2rem" }}>0</span>
              Quiz Created
            </p>
          )}
        </div>
        <div className={styles.count_card} style={{ color: "#60b84b" }}>
          {quizData.length > 0 ? (
            <p className={styles.count_info}>
              <span style={{ marginRight: "8px", fontSize: "2.2rem" }}>
                {quizData.reduce(
                  (total, quiz) => total + quiz.questions.length,
                  0
                )}
              </span>
              Questions Created
            </p>
          ) : (
            <p className={styles.count_info}>
              <span style={{ marginRight: "8px", fontSize: "2.2rem" }}>0</span>
              Questions Created
            </p>
          )}
        </div>
        <div className={styles.count_card} style={{ color: "#5076ff" }}>
          <p className={styles.count_info}>
            <span style={{ marginRight: "8px", fontSize: "2.2rem" }}>
              {formatImpressions(
                quizData.reduce(
                  (total, quiz) =>
                    total +
                    (quiz.no_of_impressions !== undefined
                      ? quiz.no_of_impressions
                      : 0),
                  0
                )
              )}
            </span>
            Total Impressions
          </p>
        </div>
      </div>
    </>
  );
}
