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

  const [isLoading, setIsLoading] = useState(false);

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
    console.log(newErrors);
    try {
      if (Object.keys(newErrors).length === 0) {
        setIsLoading(true);
        await register(name, email, password, confirmPassword);
        setIsLoggedIn(true);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className={styles.register_container}>
        <div className={styles.input_wrapper}>
          <div className={styles.form_input}>
            <label>Name</label>
            {!errors.nameErr && (
              <input
                type="text"
                className={styles.input}
                name="name"
                onChange={handleChange}
                value={registerData.name}
              ></input>
            )}
            {errors.nameErr && (
              <input
                type="text"
                className={styles.errorInput}
                name="name"
                placeholder="Invalid name"
                onChange={handleChange}
                value={registerData.name}
              ></input>
            )}
          </div>

          <div className={styles.form_input}>
            <label>Email</label>
            {!errors.emailErr && (
              <input
                type="email"
                className={styles.input}
                name="email"
                onChange={handleChange}
                value={registerData.email}
              ></input>
            )}
            {errors.emailErr && (
              <input
                type="email"
                className={styles.errorInput}
                name="email"
                placeholder="Invalid email"
                onChange={handleChange}
                value={registerData.email}
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
                value={registerData.password}
              ></input>
            )}
            {errors.passwordErr && (
              <input
                type="password"
                className={styles.errorInput}
                name="password"
                placeholder="Invalid password"
                onChange={handleChange}
                value={registerData.password}
              ></input>
            )}
          </div>

          <div className={styles.form_input}>
            <label>Confirm Password</label>
            {!errors.confirmPasswordErr && (
              <input
                type="password"
                className={styles.input}
                name="confirmPassword"
                onChange={handleChange}
                value={registerData.confirmPassword}
              ></input>
            )}
            {errors.confirmPasswordErr && (
              <input
                type="password"
                className={styles.errorInput}
                name="confirmPassword"
                placeholder="Password doesn't match"
                onChange={handleChange}
                value={registerData.confirmPassword}
              ></input>
            )}
          </div>
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
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
      </div>
    </>
  );
}
