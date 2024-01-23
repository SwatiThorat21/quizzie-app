import styles from "./quizQuestionsPage.module.css";
import CreateQuestions from "../../components/createQuestions/CreateQuestions";

export default function QuizQuestionsPage() {
  return (
    <>
      <div className={styles.questions_page_Container}>
       <CreateQuestions />
      </div>
    </>
  );
}
