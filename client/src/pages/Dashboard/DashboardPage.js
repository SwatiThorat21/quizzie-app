import styles from "./dashboardPage.module.css";
import CountCards from "../../components/countCards/CountCards";
import TrendingQuizs from "../../components/trendingQuizs/TrendingQuizs";
import Sidebar from "../../components/sidebar/Sidebar";

export default function DashboardPage() {
  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <div className={styles.dashboard_container}>
          <div className={styles.main_page_container}>
            <CountCards />
            <TrendingQuizs />
          </div>
        </div>
      </div>
    </>
  );
}
