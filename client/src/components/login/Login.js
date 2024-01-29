import styles from "./login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../apis/auth";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailErr: false,
    passwordErr: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  async function addLoginUser(email, password) {
    const newErrors = {};
    let mailFormat = /\S+@\S+\.\S+/;
    if (!email || !email.match(mailFormat)) {
      newErrors.emailErr = true;
    }
    if (!password || password.length < 8 || password.length > 15) {
      newErrors.passwordErr = true;
    }
    setErrors(newErrors);
    try {
      if (Object.keys(newErrors).length === 0) {
        await login(email, password);
        navigate("/dashboard");
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className={styles.login_container}>
        <div className={styles.input_wrapper}>
        <div className={styles.form_input}>
            <label>Email</label>
            {!errors.emailErr && (
              <input
                type="email"
                className={styles.input}
                name="email"              
                onChange={handleChange}
                value={loginData.email}
              ></input>
            )}
            {errors.emailErr && (
              <input
                type="email"
                className={styles.errorInput}
                name="email"
                placeholder="Invalid email"
                onChange={handleChange}
                value={loginData.email}
              ></input>
            )}
          </div>

          <div className={styles.form_input}>
            <label>Password</label>
            {!errors.passwordErr && (
              <input
                type="password"
                className={styles.input}
                name="password"
                onChange={handleChange}
                value={loginData.password}
              ></input>
            )}
            {errors.passwordErr && (
              <input
                type="password"
                className={styles.errorInput}
                name="password"
                placeholder="Invalid password"
                onChange={handleChange}
                value={loginData.password}
              ></input>
            )}
          </div>

         
        </div>
        <button
          className={styles.login_btn}
          onClick={() => addLoginUser(loginData.email, loginData.password)}
        >
          Log in
        </button>
      </div>
    </>
  );
}
