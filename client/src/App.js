import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterLoginPage from "./pages/RegisterLoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import AnalyticsPage from "./pages/analytics/AnalyticsPage";
import CreateQuizPage from "./pages/create-quiz/CreateQuizPage";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div style={{display: "flex", height: "100vh"}}>
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
        <Route path="/create-quiz" element={<CreateQuizPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
