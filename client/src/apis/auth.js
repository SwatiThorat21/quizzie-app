import axios from "axios";

const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;

export async function login(email, password) {
  try {
    const reqUrl = `${backendBaseUrl}/auth/login`;
    const reqPayload = {
      email: email,
      password: password,
    };
    return await axios
      .post(reqUrl, reqPayload)
      .then((response) => {
        // localStorage.setItem("userData", JSON.stringify(response.data));
        console.log(response.data);
        return response.data;
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function register(
  name,
  email,
  password,
  confirmPassword,
) {
  try {
    const reqUrl = `${backendBaseUrl}/auth/register`;
    const reqPayload = {
      name: name,
      email: email,
      password: password,
      confirmPassword:confirmPassword
    };
    return await axios
      .post(reqUrl, reqPayload)
      .then((response) => {
        console.log(response.data);
        // localStorage.setItem("userData", JSON.stringify(response.data));
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error.message);
      });
  } catch (error) {
    console.log(error.message);
  }
}
