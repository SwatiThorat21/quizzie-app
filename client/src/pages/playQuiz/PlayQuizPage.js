import PlayQuiz from "../../components/playQuiz/PlayQuiz";
import QuizSuccess from "../../components/quizSuccess/QuizSuccess";
import { useState } from "react";

export default function PlayQuizPage() {
  const [quizData, setQuizData] = useState({});
  const [quizSuccess, setQuizSuccess] = useState(false);
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [answerIndexSelected, setAnswerIndexSelected] = useState(undefined);
  const [timeLeft, setTimeLeft] = useState(undefined);

  return (
    <>
      {!quizSuccess && (
        <PlayQuiz
          setQuizData={setQuizData}
          quizData={quizData}
          setCurrentQuesIndex={setCurrentQuesIndex}
          currentQuesIndex={currentQuesIndex}
          setQuizSuccess={setQuizSuccess}
          setCorrectAnswersCount={setCorrectAnswersCount}
          answerIndexSelected={answerIndexSelected}
          setAnswerIndexSelected={setAnswerIndexSelected}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
        />
      )}
      {quizSuccess && (
        <QuizSuccess
          quizData={quizData}
          currentQuesIndex={currentQuesIndex}
          correctAnswersCount={correctAnswersCount}
          timeLeft={timeLeft}
        />
      )}
    </>
  );
}
