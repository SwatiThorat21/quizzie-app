import axios from "axios";

const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;

export async function CreateQuizFormData(
  userId,
  quizTitle,
  quizType,
  timer_for_eachQuestion,
  createdAt_date,
  questions
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
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {}
}

export async function GetQuizDataById(quizId) {
  try {
    const reqUrl = `${backendBaseUrl}/quiz/get-quiz/${quizId}`;

    return await axios
      .get(reqUrl)
      .then((response) => {
        // console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {}
}

export async function logQuizImpression(quizId) {
  try {
    const reqUrl = `${backendBaseUrl}/quiz/log-impression/${quizId}`;

    return await axios
      .patch(reqUrl)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error)
  }
}
