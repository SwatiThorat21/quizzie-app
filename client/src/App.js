import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterLoginPage from "./pages/RegisterLoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterLoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
