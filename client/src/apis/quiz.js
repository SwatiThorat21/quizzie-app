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
        if (error.response.status === 401) {
          localStorage.removeItem("jwToken");
          window.location.href = "/";
        }
      });
  } catch (error) {}
}

export async function GetAllQuizData(userId) {
  try {
    const reqUrl = `${backendBaseUrl}/quiz/quiz-data/${userId}`;
    const jwToken = JSON.parse(localStorage.getItem("jwToken"));
    const headers = {
      jwtoken: `${jwToken}`,
    };

    return await axios
      .get(reqUrl, { headers })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          localStorage.removeItem("jwToken");
          window.location.href = "/";
        }
      });
  } catch (error) {
    console.log(error);
  }
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
  } catch (error) {
    console.log(error);
  }
}

export async function logQuizImpression(quizId) {
  try {
    const reqUrl = `${backendBaseUrl}/quiz/log-impression/${quizId}`;

    return await axios
      .patch(reqUrl)
      .then((res) => console.log(res.data.data))
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}

export async function logAnswer(questionId, index_selected_by_user) {
  if (!questionId || index_selected_by_user === undefined) return;
  try {
    const reqUrl = `${backendBaseUrl}/quiz/log-answer`;
    const reqPayload = {
      questionId: questionId,
      index_selected_by_user: index_selected_by_user,
    };

    return await axios
      .patch(reqUrl, reqPayload)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {}
}

export async function DeleteQuizDataById(quizId) {
  try {
    const reqUrl = `${backendBaseUrl}/quiz/${quizId}`;
    const jwToken = JSON.parse(localStorage.getItem("jwToken"));
    const headers = {
      jwtoken: `${jwToken}`,
    };

    return await axios
      .delete(reqUrl, { headers })
      .then((response) => {
        // console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          localStorage.removeItem("jwToken");
          window.location.href = "/";
        }
      });
  } catch (error) {}
}

export async function editFormData(quizId, updatedQuestionsData) {
  try {
    const reqUrl = `${backendBaseUrl}/quiz/edit-quiz/${quizId}`;
    const jwToken = JSON.parse(localStorage.getItem("jwToken"));
    const headers = {
      jwtoken: `${jwToken}`,
    };
    const response = await axios.patch(reqUrl, updatedQuestionsData, {
      headers,
    });
    console.log(response.data.data);
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      localStorage.removeItem("jwToken");
      window.location.href = "/";
    }
    throw error;
  }
}
