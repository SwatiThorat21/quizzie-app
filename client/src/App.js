import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterLoginPage from "./pages/RegisterLogin/RegisterLoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import AnalyticsPage from "./pages/analytics/AnalyticsPage";
import CreateQuizPage from "./pages/create-quiz/CreateQuizPage";
import { useState } from "react";
import QuizQuestionsPage from "./pages/quizQuestionsPage/QuizQuestionsPage";
import QuizLinkSharePage from "./pages/quizLinkSharePage/QuizLinkSharePage";
import PlayQuizPage from "./pages/playQuiz/PlayQuizPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [quizFormData, setQuizFormData] = useState({
    quizTitle: "",
    quizType: "",
  });
  const [quizId, setQuizId] = useState("");
  console.log(quizId)

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <RegisterLoginPage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route
            path="/create-quiz"
            element={
              <CreateQuizPage setQuizFormData={setQuizFormData} quizFormData={quizFormData} />
            }
          />
          <Route
            path="/create-questions"
            element={
              <QuizQuestionsPage quizFormData={quizFormData} setQuizId={setQuizId} quizId={quizId} />
            }
          />
          <Route
            path="/quiz-link"
            element={<QuizLinkSharePage quizId={quizId} />}
          />
          <Route
            path="/quiz"
            element={<PlayQuizPage quizId={quizId} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
