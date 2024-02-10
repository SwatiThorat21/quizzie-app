import PlayQuiz from "../../components/playQuiz/PlayQuiz";
import QuizSuccess from "../../components/quizSuccess/QuizSuccess";
import { useState } from "react";
import PollSuccess from "../../components/PollSuccess/PollSuccess";

export default function PlayQuizPage() {
  const [quizData, setQuizData] = useState({});
  const [quizSuccess, setQuizSuccess] = useState(false);
  const [pollSuccess, setPollSuccess] = useState(false);
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [answerIndexSelected, setAnswerIndexSelected] = useState(undefined);
  const [timeLeft, setTimeLeft] = useState(undefined);
  console.log(quizData);
  return (
    <>
      {!quizSuccess && !pollSuccess &&(
        <PlayQuiz
          setQuizData={setQuizData}
          quizData={quizData}
          setCurrentQuesIndex={setCurrentQuesIndex}
          currentQuesIndex={currentQuesIndex}
          setQuizSuccess={setQuizSuccess}
          setPollSuccess={setPollSuccess}
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

      {pollSuccess && <PollSuccess />}
    </>
  );
}
