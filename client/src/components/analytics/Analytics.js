import styles from "./analytics.module.css";
import edit_quiz from "../../images/edit_quiz.png";
import share_quiz from "../../images/share_quiz.png";
import delete_quiz from "../../images/delete_quiz.png";

export default function Analytics({ quizData }) {
  return (
    <>
      <div className={styles.analytics_table_container}>
        <div className={styles.analytics_table_wrapper}>
          <h1 className={styles.analytics_heading}>Quiz Analytics</h1>
          <table className={styles.analytics_table}>
            <thead className={styles.analyticsTable_heading}>
              <tr>
                <th>Sr.No.</th>
                <th>Quiz Name</th>
                <th>Created on</th>
                <th>Impression</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {quizData.map((quiz, index) => {
                const createdAtDate = quiz.createdAt_date;
                const parsedDate = new Date(createdAtDate);

                const formattedDate = `${parsedDate.toLocaleString("default", {
                  month: "short",
                })} ${parsedDate.getDate()} ${parsedDate.getFullYear()}`;

                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{quiz.quizTitle}</td>
                    <td>{formattedDate}</td>
                    <td>{quiz.no_of_impressions}</td>
                    <td
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                        marginRight: "1rem",
                      }}
                    >
                      <img src={edit_quiz} alt="edit_quiz"></img>
                      <img src={share_quiz} alt="share_quiz"></img>
                      <img src={delete_quiz} alt="share_quiz"></img>
                    </td>
                    <td
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Question Wise Analysis
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
