import styles from "./quizQuestionsPage.module.css";
import addIcon from "../../images/plus.png";
import { useState } from "react";
import closeIcon from "../../images/closeIcon.png";

export default function QuizQuestionsPage() {
  const [questionNumbers, setQuestionNumbers] = useState([1]);
  const [quizQuestionsData, setQuizQuestionsData] = useState({
    questionTitle: "",
    optionType: "text",
    options: [
      {
        text: "",
        imageUrl: "",
      },
      {
        text: "",
        imageUrl: "",
      },
      {
        text: "",
        imageUrl: "",
      },
      {
        text: "",
        imageUrl: "",
      },
    ],
    timer: "",
  });

  function addQuestions() {
    if (questionNumbers.length < 5) {
      setQuestionNumbers((prevNumbers) => [
        ...prevNumbers,
        prevNumbers.length + 1,
      ]);
    }
  }

  function removeQuestions(indexToRemove) {
    setQuestionNumbers((prevNumbers) =>
      prevNumbers.filter((_, index) => index !== indexToRemove)
    );
  }

  function handleChange(e, optionIndex) {
    const { name, value } = e.target;
    setQuizQuestionsData((prevData) => {
      if (name === "text" || name === "imageUrl") {
        const updatedOptions = [...prevData.options];
        updatedOptions[optionIndex] = {
          ...updatedOptions[optionIndex],
          [name]: value,
        };
        return {
          ...prevData,
          options: updatedOptions,
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  }

  console.log(quizQuestionsData);

  function createQuiz() {}

  return (
    <>
      <div className={styles.questions_page_Container}>
        <div className={styles.questions_page_subContainer}>
          <div className={styles.no_of_questions_wrapper}>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}
            >
              <div className={styles.question_numbers}>
                {questionNumbers.map((number, index) => (
                  <div
                    style={{ position: "relative", display: "flex" }}
                    key={index}
                  >
                    <div className={styles.quesNumber}>{number}</div>
                    {number !== 1 && (
                      <img
                        src={closeIcon}
                        alt="closeIcon"
                        className={styles.closeNumIcon}
                        onClick={() => removeQuestions(index)}
                      ></img>
                    )}
                  </div>
                ))}
              </div>
              <img
                src={addIcon}
                alt="add icon"
                style={{ width: "15px", height: "15px" }}
                onClick={addQuestions}
              ></img>
            </div>
            <p className={styles.maxQuestions}>Max 5 questions</p>
          </div>
          <div className={styles.questionTitleInput}>
            <input
              type="text"
              name="questionTitle"
              placeholder="Q & A Question"
              value={quizQuestionsData.questionTitle}
              onChange={handleChange}
            ></input>
          </div>
          <div className={styles.options_wrapper}>
            <p>Option Type</p>
            <div className={styles.radioBtn_wrapper}>
              <input
                type="radio"
                value="text"
                name="optionType"
                onChange={handleChange}
                checked={quizQuestionsData.optionType === "text"}
              ></input>
              <label>Text</label>
            </div>
            <div className={styles.radioBtn_wrapper}>
              <input
                type="radio"
                value="image_url"
                name="optionType"
                onChange={handleChange}
                checked={quizQuestionsData.optionType === "image_url"}
              ></input>
              <label>Image URL</label>
            </div>
            <div className={styles.radioBtn_wrapper}>
              <input
                type="radio"
                value="text_image_url"
                name="optionType"
                onChange={handleChange}
                checked={quizQuestionsData.optionType === "text_image_url"}
              ></input>
              <label>Text & Image URL</label>
            </div>
          </div>
          <div className={styles.optionsAndTimer_wrapper}>
            <div className={styles.option_radioBtns_wrapper}>
              <div>
                {quizQuestionsData.options.map((option, index) => (
                  <div className={styles.radioBtn_wrapper} key={index}>
                    <input type="radio" value="Text"></input>
                    <input
                      type="text"
                      placeholder="Text"
                      name="text"
                      value={option.text}
                      onChange={(e)=>handleChange(e,index)}
                    ></input>
                  </div>
                ))}
              </div>
              <div className={styles.timer_wrapper}>
                <p>Timer</p>
                <div className={styles.timerBtn}>OFF</div>
                <div className={styles.timerBtn}>5 Sec</div>
                <div className={styles.timerBtn}>10 Sec</div>
              </div>
            </div>
            <div className={styles.buttons_wrapper}>
              <button className={styles.cancelBtn}>Cancel</button>
              <button className={styles.createQuizBtn} onClick={createQuiz}>
                Create Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
