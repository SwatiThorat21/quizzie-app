import Analytics from "../../components/analytics/Analytics";
import Sidebar from "../../components/sidebar/Sidebar";

export default function AnalyticsPage() {
  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <Analytics />
      </div>
    </>
  );
}
