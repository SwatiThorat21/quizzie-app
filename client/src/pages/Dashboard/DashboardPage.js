import styles from "./dashboardPage.module.css";
import CountCards from "../../components/countCards/CountCards";
import TrendingQuizs from "../../components/trendingQuizs/TrendingQuizs";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardPage({ setIsLoggedIn, quizData }) {
  const navigate = useNavigate();
  useEffect(() => {
    const jwToken = localStorage.getItem("jwToken");
    if (!jwToken) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar setIsLoggedIn={setIsLoggedIn} />
        <div className={styles.dashboard_container}>
          <div className={styles.main_page_container}>
            <div className={styles.main_page_subcontainer}>
              <CountCards quizData={quizData} />
              <TrendingQuizs quizData={quizData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
