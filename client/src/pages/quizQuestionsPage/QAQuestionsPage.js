import styles from "./quizQuestionsPage.module.css";
import addIcon from "../../images/plus.png";
import { useState } from "react";
import closeIcon from "../../images/closeIcon.png";
import { useNavigate } from "react-router-dom";

export default function QuizQuestionsPage() {
  const navigate = useNavigate();
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);
  const [questionNumbers, setQuestionNumbers] = useState([1]);
  const [quizQuestionsData, setQuizQuestionsData] = useState([
    {
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
      answerSelectedIndex: "",
    },
  ]);

  function addQuestions() {
    setQuizQuestionsData((prevData) => [
      ...prevData,
      {
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
        answerSelectedIndex: "",
      },
    ]);
    setCurrentQuesIndex((prevNum) => prevNum + 1);
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

  function handleShowQuestiondata(index) {
    setCurrentQuesIndex(index);
  }

  function handleChange(e, optionIndex) {
    const { name, value } = e.target;

    setQuizQuestionsData((prevData) => {
      const updatedQuestions = [...prevData];
      const updatedQuestion = { ...updatedQuestions[currentQuesIndex] };

      if (name === "text" || name === "imageUrl") {
        const updatedOptions = [...updatedQuestion.options];
        updatedOptions[optionIndex] = {
          ...updatedOptions[optionIndex],
          [name]: value,
        };
        updatedQuestion.options = updatedOptions;
      } else {
        updatedQuestion[name] = value;
      }
      updatedQuestions[currentQuesIndex] = updatedQuestion;
      return updatedQuestions;
    });
  }

  function handleTimerClick(value) {
    setQuizQuestionsData((prevData) => {
      return {
        ...prevData,
        timer: value,
      };
    });
  }
  console.log(quizQuestionsData);
  // console.log(currentQuesIndex);

  function cancelQuiz() {
    navigate("/dashboard");
  }
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
                    <div
                      className={styles.quesNumber}
                      onClick={() => handleShowQuestiondata(index)}
                    >
                      {number}
                    </div>
                    {number !== 1 && (
                      <img
                        src={closeIcon}
                        alt="closeIcon"
                        className={styles.closeNumIcon}
                        onClick={removeQuestions}
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
              value={quizQuestionsData[currentQuesIndex]?.questionTitle}
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
                checked={
                  quizQuestionsData[currentQuesIndex]?.optionType === "text"
                }
              ></input>
              <label>Text</label>
            </div>
            <div className={styles.radioBtn_wrapper}>
              <input
                type="radio"
                value="image_url"
                name="optionType"
                onChange={handleChange}
                checked={
                  quizQuestionsData[currentQuesIndex]?.optionType === "image_url"
                }
              ></input>
              <label>Image URL</label>
            </div>
            <div className={styles.radioBtn_wrapper}>
              <input
                type="radio"
                value="text_image_url"
                name="optionType"
                onChange={handleChange}
                checked={
                  quizQuestionsData[currentQuesIndex]?.optionType ===
                  "text_image_url"
                }
              ></input>
              <label>Text & Image URL</label>
            </div>
          </div>
          <div className={styles.optionsAndTimer_wrapper}>
            {quizQuestionsData[currentQuesIndex] && (
              <div className={styles.option_radioBtns_wrapper}>
                {quizQuestionsData[currentQuesIndex].optionType === "text" && (
                  <div>
                    {quizQuestionsData[currentQuesIndex].options.map(
                      (option, index) => (
                        <div className={styles.option_wrapper} key={index}>
                          <input
                            type="radio"
                            value={index}
                            name="answerSelectedIndex"
                            onChange={(e)=>handleChange(e, index)}
                          ></input>
                          <input
                            type="text"
                            placeholder="Text"
                            name="text"
                            value={option.text}
                            onChange={(e) => handleChange(e, index)}
                          ></input>
                        </div>
                      )
                    )}
                  </div>
                )}
                {quizQuestionsData[currentQuesIndex].optionType ===
                  "image_url" && (
                  <div>
                    {quizQuestionsData[currentQuesIndex].options.map((option, index) => (
                      <div className={styles.option_wrapper} key={index}>
                        <input
                          type="radio"
                          value={index}
                          name="answerSelectedIndex"
                          onChange={(e)=>handleChange(e, index)}
                        ></input>
                        <input
                          type="text"
                          placeholder="Image URL"
                          name="imageUrl"
                          value={option.imageUrl}
                          onChange={(e) => handleChange(e, index)}
                        ></input>
                      </div>
                    ))}
                  </div>
                )}
                {quizQuestionsData[currentQuesIndex].optionType ===
                  "text_image_url" && (
                  <div>
                    {quizQuestionsData[currentQuesIndex].options.map((option, index) => (
                      <div className={styles.option_wrapper} key={index}>
                        <input
                          type="radio"
                          value={index}
                          name="answerSelectedIndex"
                          onChange={(e)=>handleChange(e, index)}
                        ></input>
                        <input
                          type="text"
                          placeholder="Text"
                          name="text"
                          value={option.text}
                          onChange={(e) => handleChange(e, index)}
                        ></input>
                        <input
                          type="text"
                          placeholder="Image URL"
                          name="imageUrl"
                          value={option.imageUrl}
                          onChange={(e) => handleChange(e, index)}
                        ></input>
                      </div>
                    ))}
                  </div>
                )}
                <div className={styles.timer_wrapper}>
                  <p>Timer</p>
                  <div
                    className={styles.timerBtn}
                    onClick={() => handleTimerClick("OFF")}
                  >
                    OFF
                  </div>
                  <div
                    className={styles.timerBtn}
                    onClick={() => handleTimerClick("5 Sec")}
                  >
                    5 Sec
                  </div>
                  <div
                    className={styles.timerBtn}
                    onClick={() => handleTimerClick("10 Sec")}
                  >
                    10 Sec
                  </div>
                </div>
              </div>
            )}
            <div className={styles.buttons_wrapper}>
              <button className={styles.cancelBtn} onClick={cancelQuiz}>
                Cancel
              </button>
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
