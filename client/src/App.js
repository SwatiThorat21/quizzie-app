import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterLoginPage from "./pages/RegisterLogin/RegisterLoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import AnalyticsPage from "./pages/analytics/AnalyticsPage";
import CreateAndEditQuizPage from "./pages/CreateAndEditQuizPage/CreateAndEditQuizPage";
import { useEffect, useState } from "react";
import PlayQuizPage from "./pages/playQuiz/PlayQuizPage";
import { GetAllQuizData } from "../src/apis/quiz";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [showCreateQuestions, setShowCreateQuestions] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allQuizData = await GetAllQuizData(userId);
        console.log(allQuizData.quizData);
        setQuizData(allQuizData.quizData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userId]);

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
          <Route
            path="/dashboard"
            element={
              <DashboardPage
                setIsLoggedIn={setIsLoggedIn}
                quizData={quizData}
              />
            }
          />
          <Route
            path="/analytics"
            element={
              <AnalyticsPage
                quizData={quizData}
                setQuizData={setQuizData}
                setIsLoggedIn={setIsLoggedIn}
                setShowCreateQuestions={setShowCreateQuestions}
              />
            }
          />
          <Route
            path="/create-edit-quiz"
            element={
              <CreateAndEditQuizPage
                showCreateQuestions={showCreateQuestions}
                setShowCreateQuestions={setShowCreateQuestions}
              />
            }
          />
          <Route path="/quiz" element={<PlayQuizPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
