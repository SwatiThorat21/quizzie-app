import styles from "./dashboardPage.module.css";
import CountCards from "../../components/countCards/CountCards"
import TrendingQuizs from "../../components/trendingQuizs/TrendingQuizs";

export default function DashboardPage() {
  return (
    <>
      <div className={styles.dashboard_container}>
        <div className={styles.main_page_container}>
          <CountCards />
          <TrendingQuizs />
        </div>
      </div>
    </>
  );
}
