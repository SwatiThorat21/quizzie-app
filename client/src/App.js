import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterLoginPage from "./pages/RegisterLogin/RegisterLoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import AnalyticsPage from "./pages/analytics/AnalyticsPage";
import CreateQuizPage from "./pages/create-quiz/CreateQuizPage";
import { useEffect, useState } from "react";
import PlayQuizPage from "./pages/playQuiz/PlayQuizPage";
import { GetAllQuizData } from "../src/apis/quiz";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allQuizData = await GetAllQuizData();
        console.log(allQuizData.quizData);
        setQuizData(allQuizData.quizData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
            element={<DashboardPage setIsLoggedIn={setIsLoggedIn} quizData={quizData}/>}
          />
          <Route path="/analytics" element={<AnalyticsPage quizData={quizData} setQuizData={setQuizData}/>} />
          <Route path="/create-quiz" element={<CreateQuizPage />} />
          <Route path="/quiz" element={<PlayQuizPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
