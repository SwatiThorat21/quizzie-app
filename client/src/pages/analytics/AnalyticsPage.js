import Analytics from "../../components/analytics/Analytics";
import Sidebar from "../../components/sidebar/Sidebar";

export default function AnalyticsPage({quizData, setQuizData}) {
  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <Analytics quizData={quizData} setQuizData={setQuizData} />
      </div>
    </>
  );
}
