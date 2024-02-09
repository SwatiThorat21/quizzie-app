import axios from "axios";

const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;

export async function login(email, password) {
  const reqUrl = `${backendBaseUrl}/auth/login`;
  const reqPayload = {
    email: email,
    password: password,
  };
  return await axios
    .post(reqUrl, reqPayload)
    .then((response) => {
      console.log(response.data)
      localStorage.setItem("jwToken", JSON.stringify(response.data.jwToken));
      localStorage.setItem("userId", response.data.userId);

      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      alert("Invalid credentials !");
      throw error;
    });
}

export async function register(name, email, password, confirmPassword) {
  try {
    const reqUrl = `${backendBaseUrl}/auth/register`;
    const reqPayload = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    return await axios
      .post(reqUrl, reqPayload)
      .then((response) => {
        localStorage.setItem("jwToken", JSON.stringify(response.data.jwToken));
        localStorage.setItem("userId", JSON.stringify(response.data.userId));
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
