import styles from "./createQuiz.module.css";
import { useNavigate } from "react-router-dom";

export default function CreateQuiz({
  setQuizFormData,
  quizFormData,
  setShowCreateQuestions,
}) {
  const navigate = useNavigate();
  function handleChange(event) {
    const { name, value } = event.target;
    setQuizFormData((prevValues) => ({ ...prevValues, [name]: value }));
  }
  function getQuizQuestions() {
    setShowCreateQuestions(true);
  }
  function cancelQuiz() {
    navigate("/dashboard");
  }

  return (
    <>
      <div className={styles.createQuiz_container}>
        <div className={styles.createQuiz_modal}>
          <div className={styles.modal}>
            <input
              type="text"
              placeholder="Quiz name"
              name="quizTitle"
              value={quizFormData.quizTitle}
              className={styles.quiz_input}
              onChange={handleChange}
            ></input>
            <div className={styles.quizType_wrapper}>
              <p>Quiz Type</p>
              <div className={styles.input_wrapper}>
                <input
                  type="radio"
                  name="quizType"
                  value="Q & A"
                  onChange={handleChange}
                />
                <label className={styles.quizTypeBtn}>Q & A</label>
              </div>
              <div className={styles.input_wrapper}>
                <input
                  type="radio"
                  name="quizType"
                  value="Poll Type"
                  onChange={handleChange}
                />
                <label className={styles.quizTypeBtn}>Poll Type</label>
              </div>
            </div>
            <div className={styles.quiz_btns_wrapper}>
              <button onClick={cancelQuiz}>Cancel</button>
              <button onClick={getQuizQuestions}>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
