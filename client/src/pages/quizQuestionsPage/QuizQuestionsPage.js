import styles from "./quizQuestionsPage.module.css";
import CreateQuestions from "../../components/createQuestions/CreateQuestions";

export default function QuizQuestionsPage({ quizFormData, userId }) {
  return (
    <>
      <div className={styles.questions_page_Container}>
        <CreateQuestions quizFormData={quizFormData} userId={userId} />
      </div>
    </>
  );
}
