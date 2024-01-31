import styles from "./analytics.module.css";
import edit_quiz from "../../images/edit_quiz.png";
import share_quiz from "../../images/share_quiz.png";
import delete_quiz from "../../images/delete_quiz.png";
import { DeleteQuizDataById } from "../../apis/quiz";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Analytics({ quizData, setQuizData }) {
  const navigate = useNavigate();
  const [isDeleted, setIsDeleted] = useState(false);
  const [quizIdToDelete, setQuizIdToDelete] = useState(null);

  async function deleteQuiz(quizId) {
    try {
      await DeleteQuizDataById(quizId);
      setQuizData((prevQuizData) =>
        prevQuizData.filter((quiz) => quiz._id !== quizId)
      );
      console.log("Quiz deleted successfully");
    } catch (error) {
      console.log(error);
      throw error;
    }
    navigate("/dashboard");
  }

  return (
    <>
      <div className={styles.analytics_table_container}>
        {!isDeleted ? (
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

                  const formattedDate = `${parsedDate.toLocaleString(
                    "default",
                    {
                      month: "short",
                    }
                  )} ${parsedDate.getDate()} ${parsedDate.getFullYear()}`;

                  return (
                    <tr key={index}>
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
                        <img
                          src={delete_quiz}
                          alt="share_quiz"
                          onClick={() => {
                            setIsDeleted(true);
                            setQuizIdToDelete(quiz._id);
                          }}
                        ></img>
                      </td>
                      <td
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Question Wise Analysis
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={styles.delete_container}>
            <div className={styles.delete_sub_container}>
              <div className={styles.delete_content}>
                <p className={styles.delete_para}>
                  Are you sure you want to delete?
                </p>
                <div className={styles.btn_wrapper}>
                  <button
                    className={styles.confirm_delete_btn}
                    onClick={() => deleteQuiz(quizIdToDelete)}
                  >
                    Confirm Delete
                  </button>
                  <button
                    className={styles.cancel}
                    onClick={() => setIsDeleted(false)}
                  >
                    Cancel Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
