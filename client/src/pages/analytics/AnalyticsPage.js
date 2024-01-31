import Analytics from "../../components/analytics/Analytics";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import ShowQuestionAnalysis from "../../components/ShowQuestionAnalysis/ShowQuestionAnalysis";

export default function AnalyticsPage({ quizData, setQuizData }) {
  const [selectedQuestionId, setSelectedQuestionId] = useState(undefined);

  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        {!selectedQuestionId && (
          <Analytics
            quizData={quizData}
            setQuizData={setQuizData}
            setSelectedQuestionId={setSelectedQuestionId}
          />
        )}
        {selectedQuestionId && (
          <ShowQuestionAnalysis
            quizData={quizData}
            selectedQuestionId={selectedQuestionId}
          />
        )}
      </div>
    </>
  );
}
