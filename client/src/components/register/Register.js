import styles from "./register.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../apis/auth";

export default function Register({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    nameErr: false,
    emailErr: false,
    passwordErr: false,
    confirmPasswordErr: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  async function addRegisterUser(name, email, password, confirmPassword) {
    const newErrors = {};
    if (!name) {
      newErrors.nameErr = true;
    }

    let mailFormat = /\S+@\S+\.\S+/;
    if (!email || !email.match(mailFormat)) {
      newErrors.emailErr = true;
    }

    if (!password || password.length < 8 || password.length > 15) {
      newErrors.passwordErr = true;
    }
    if (password !== confirmPassword) {
      newErrors.confirmPasswordErr = true;
    }
    setErrors(newErrors);
    try {
      if (Object.keys(newErrors).length === 0) {
        await register(name, email, password, confirmPassword);
        setIsLoggedIn(true);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className={styles.register_container}>
        <div className={styles.input_wrapper}>
          <input
            type="text"
            placeholder="Name"
            className={styles.input}
            name="name"
            onChange={handleChange}
            value={registerData.name}
          ></input>
          {errors.nameErr && (
            <label className={styles.errorMsg}>Please enter name !</label>
          )}
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            name="email"
            onChange={handleChange}
            value={registerData.email}
          ></input>
          {errors.emailErr && (
            <label className={styles.errorMsg}>Invalid email !</label>
          )}
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            name="password"
            onChange={handleChange}
            value={registerData.password}
          ></input>
          {errors.passwordErr && (
            <label className={styles.errorMsg}>Invalid password !</label>
          )}
          <input
            type="password"
            placeholder="Confirm Password"
            className={styles.input}
            name="confirmPassword"
            onChange={handleChange}
            value={registerData.confirmPassword}
          ></input>
          {errors.confirmPasswordErr && (
            <label className={styles.errorMsg}>Invalid password !</label>
          )}
        </div>
        <button
          className={styles.register_btn}
          onClick={() =>
            addRegisterUser(
              registerData.name,
              registerData.email,
              registerData.password,
              registerData.confirmPassword
            )
          }
        >
          Sign Up
        </button>
      </div>
    </>
  );
}
