import styles from "./dashboardPage.module.css";
import CountCards from "../../components/countCards/CountCards"
import TrendingQuizs from "../../components/trendingQuizs/TrendingQuizs";
import Sidebar from "../../components/sidebar/Sidebar";

export default function DashboardPage() {
  return (
    <>
      <div className={styles.dashboard_container}>
        <Sidebar />
        <div className={styles.main_page_container}>
          <CountCards />
          <TrendingQuizs />
        </div>
      </div>
    </>
  );
}
