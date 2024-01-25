import CreateQuiz from "../../components/createQuiz/CreateQuiz";

export default function CreateQuizPage({ setQuizFormData, quizFormData }) {
  return <CreateQuiz setQuizFormData={setQuizFormData} quizFormData={quizFormData} />;
}
