import axios from "axios";

const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;

export async function CreateQuizFormData(
  userId,
  quizTitle,
  quizType,
  timer_for_eachQuestion,
  createdAt_date,
  questions,
  setQuizId
) {
  try {
    const reqUrl = `${backendBaseUrl}/quiz/create-quiz`;
    const reqPayload = {
      userId: userId,
      quizTitle: quizTitle,
      quizType: quizType,
      timer_for_eachQuestion: timer_for_eachQuestion,
      createdAt_date: createdAt_date,
      questions: questions,
    };
    const jwToken = JSON.parse(localStorage.getItem("jwToken"));
    const headers = {
      jwtoken: `${jwToken}`,
    };
    return await axios
      .post(reqUrl, reqPayload, { headers })
      .then((response) => {
        setQuizId(response.data.quizId);
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {}
}

export async function GetQuizDataById(quizId) {
  console.log(quizId)
  try {
    const reqUrl = `${backendBaseUrl}/quiz/get-quiz/${quizId}`;

    return await axios
      .get(reqUrl)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {}
}
