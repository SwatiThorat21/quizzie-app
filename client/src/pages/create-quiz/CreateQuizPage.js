import CreateQuiz from "../../components/createQuiz/CreateQuiz";
import { useState } from "react";
import CreateQuestions from "../../components/createQuestions/CreateQuestions";
import QuizLinkShare from "../../components/quizLinkShare/QuizLinkShare";
import styles from "./createQuizPage.module.css";

export default function CreateQuizPage() {
  const [showCreateQuestions, setShowCreateQuestions] = useState(false);
  const [showQuizLinkShare, setShowQuizLinkShare] = useState(false);
  const [quizId, setQuizId] = useState("");
  const [quizFormData, setQuizFormData] = useState({
    quizTitle: "",
    quizType: "",
  });

  return (
    <>
      {!showCreateQuestions && !showQuizLinkShare && (
        <CreateQuiz
          setShowCreateQuestions={setShowCreateQuestions}
          quizFormData={quizFormData}
          setQuizFormData={setQuizFormData}
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
      {showQuizLinkShare && <QuizLinkShare quizId={quizId} />}
    </>
  );
}
