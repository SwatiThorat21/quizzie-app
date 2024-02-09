import CreateQuiz from "../../components/createQuiz/CreateQuiz";
import { useState } from "react";
import CreateQuestions from "../../components/createQuestions/CreateQuestions";
import QuizLinkShare from "../../components/quizLinkShare/QuizLinkShare";
import styles from "./createQuizPage.module.css";
import { useEffect } from "react";
import { GetQuizDataById } from "../../apis/quiz";

export default function CreateAndEditQuizPage({
  setShowCreateQuestions,
  showCreateQuestions,
}) {
  const [showQuizLinkShare, setShowQuizLinkShare] = useState(false);
  const [quizId, setQuizId] = useState(null);
  const [quizFormData, setQuizFormData] = useState({
    quizTitle: "",
    quizType: "",
  });
  const [quizQuestionsData, setQuizQuestionsData] = useState([
    {
      questionTitle: "",
      optionType: "Text",
      options: [
        {
          text: "",
          imageUrl: "",
        },
        {
          text: "",
          imageUrl: "",
        },
        {
          text: "",
          imageUrl: "",
        },
        {
          text: "",
          imageUrl: "",
        },
      ],
      correct_answer_index: -1,
    },
  ]);
  const [isEditing, setIsEditing] = useState(false);

  console.log();

  useEffect(() => {
    const fetchQuizData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const quizIdParam = urlParams.get("quizId");

      if (quizIdParam) {
        setQuizId(quizIdParam);
        try {
          const quizData = await GetQuizDataById(quizIdParam);
          // console.log(quizData);
          setQuizFormData({
            _id: quizId,
            quizTitle: quizData.data.quizTitle,
            quizType: quizData.data.quizType,
          });

          setQuizQuestionsData(quizData.data.questions);
          setIsEditing(true);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchQuizData();
  }, [quizId]);

  return (
    <>
      {!isEditing && !showCreateQuestions && !showQuizLinkShare && (
        <CreateQuiz
          setShowCreateQuestions={setShowCreateQuestions}
          quizFormData={quizFormData}
          setQuizFormData={setQuizFormData}
        />
      )}
      {(isEditing || showCreateQuestions) && (
        <>
          <div className={styles.questions_page_Container}>
            <CreateQuestions
              setShowQuizLinkShare={setShowQuizLinkShare}
              quizFormData={quizFormData}
              setQuizId={setQuizId}
              quizQuestionsData={quizQuestionsData}
              setQuizQuestionsData={setQuizQuestionsData}
              setShowCreateQuestions={setShowCreateQuestions}
            />
          </div>
        </>
      )}
      {showQuizLinkShare && <QuizLinkShare quizId={quizId} setShowCreateQuestions={setShowCreateQuestions} />}
    </>
  );
}
