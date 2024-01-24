import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterLoginPage from "./pages/RegisterLogin/RegisterLoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import AnalyticsPage from "./pages/analytics/AnalyticsPage";
import CreateQuizPage from "./pages/create-quiz/CreateQuizPage";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import QAQuestionsPage from "./pages/quizQuestionsPage/QuizQuestionsPage";
import QuizLinkSharePage from "./pages/quizLinkSharePage/QuizLinkSharePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [quizdata, setQuizData] = useState({
    quizTitle: "",
    quizType: "",
  });
  const [quizId, setQuizId] = useState("");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Router>
        <Sidebar />
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
              <CreateQuizPage setQuizData={setQuizData} quizdata={quizdata} />
            }
          />
          <Route
            path="/create-qa-questions"
            element={<QAQuestionsPage quizdata={quizdata} setQuizId={setQuizId} />}
          />
          <Route path="/quiz?quizid=:id" element={<QuizLinkSharePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
