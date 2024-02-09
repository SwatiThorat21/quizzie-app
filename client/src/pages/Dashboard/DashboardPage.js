import styles from "./dashboardPage.module.css";
import CountCards from "../../components/countCards/CountCards";
import TrendingQuizs from "../../components/trendingQuizs/TrendingQuizs";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import { GetAllQuizData } from "../../apis/quiz";

export default function DashboardPage({
  setIsLoggedIn,
  quizData,
  setQuizData,
}) {
  const userId = localStorage.getItem("userId");
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      try {
        const allQuizData = await GetAllQuizData(userId);
        // console.log(allQuizData.quizData);
        setQuizData(allQuizData.quizData);
        setIsloading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [setQuizData, userId]);

  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar setIsLoggedIn={setIsLoggedIn} />
        {isLoading ? (
          <div className={styles.spinnerContainer}>
            <div className={styles.loadingSpinner}></div>
          </div>
        ) : (
          <div className={styles.dashboard_container}>
            <div className={styles.main_page_container}>
              <div className={styles.main_page_subcontainer}>
                <CountCards quizData={quizData} />
                <TrendingQuizs quizData={quizData} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
