import CreateQuiz from "../../components/createQuiz/CreateQuiz";
import { useState } from "react";
import CreateQuestions from "../../components/createQuestions/CreateQuestions";
import QuizLinkShare from "../../components/quizLinkShare/QuizLinkShare";
import styles from "./createQuizPage.module.css"

export default function CreateQuizPage({ setQuizFormData, quizFormData }) {
  const [showCreateQuestions, setShowCreateQuestions] = useState(false);
  const [showQuizLinkShare, setShowQuizLinkShare] = useState(false);
  const [ quizId, setQuizId] = useState("");

  // const urlParams = new URLSearchParams(window.location.search);
  // const quizId = urlParams.get("quizId");

  return (
    <>
      {!showCreateQuestions && !showQuizLinkShare && (
        <CreateQuiz
          setQuizFormData={setQuizFormData}
          quizFormData={quizFormData}
          setShowCreateQuestions={setShowCreateQuestions}
        />
      )}
      {showCreateQuestions && (
        <>
          <div className={styles.questions_page_Container}>
            <CreateQuestions
              setShowQuizLinkShare={setShowQuizLinkShare}
              quizFormData={quizFormData}
              setQuizId={setQuizId}
            />
          </div>
        </>
      )}
      {showQuizLinkShare && <QuizLinkShare quizId={quizId}/>}
    </>
  );
}
