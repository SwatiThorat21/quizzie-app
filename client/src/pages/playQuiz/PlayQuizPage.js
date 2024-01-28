import PlayQuiz from "../../components/playQuiz/PlayQuiz";
import QuizSuccess from "../../components/quizSuccess/QuizSuccess";
import { useState } from "react";

export default function PlayQuizPage() {
  const [quizData, setQuizData] = useState({});
  const [quizSuccess, setQuizSuccess] = useState(false);
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(0);
  console.log(answeredCorrectly)
  return (
    <>
      {!quizSuccess && (
        <PlayQuiz
          setQuizData={setQuizData}
          quizData={quizData}
          setCurrentQuesIndex={setCurrentQuesIndex}
          currentQuesIndex={currentQuesIndex}
          setQuizSuccess={setQuizSuccess}
          setAnsweredCorrectly={setAnsweredCorrectly}
        />
      )}
      {quizSuccess && (
        <QuizSuccess quizData={quizData} currentQuesIndex={currentQuesIndex} />
      )}
    </>
  );
}
