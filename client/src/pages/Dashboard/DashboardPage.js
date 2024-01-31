import styles from "./dashboardPage.module.css";
import CountCards from "../../components/countCards/CountCards";
import TrendingQuizs from "../../components/trendingQuizs/TrendingQuizs";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardPage({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);
  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar setIsLoggedIn={setIsLoggedIn} />
        <div className={styles.dashboard_container}>
          <div className={styles.main_page_container}>
            <div className={styles.main_page_subcontainer}>
              <CountCards />
              <TrendingQuizs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
