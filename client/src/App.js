import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterLoginPage from "./pages/RegisterLogin/RegisterLoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import AnalyticsPage from "./pages/analytics/AnalyticsPage";
import CreateQuizPage from "./pages/create-quiz/CreateQuizPage";
import { useState } from "react";
import PlayQuizPage from "./pages/playQuiz/PlayQuizPage";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  const [quizFormData, setQuizFormData] = useState({
    quizTitle: "",
    quizType: "",
  });

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
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route
            path="/create-quiz"
            element={
              <CreateQuizPage
                setQuizFormData={setQuizFormData}
                quizFormData={quizFormData}
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
