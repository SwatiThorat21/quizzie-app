import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterLoginPage from "./pages/RegisterLogin/RegisterLoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import AnalyticsPage from "./pages/analytics/AnalyticsPage";
import CreateAndEditQuizPage from "./pages/CreateAndEditQuizPage/CreateAndEditQuizPage";
import { useState } from "react";
import PlayQuizPage from "./pages/playQuiz/PlayQuizPage";


function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [showCreateQuestions, setShowCreateQuestions] = useState(false);
  

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
                setQuizData={setQuizData}
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
