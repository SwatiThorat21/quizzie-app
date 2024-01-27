import styles from "./RegisterLoginPage.module.css";
import Register from "../../components/register/Register";
import Login from "../../components/login/Login";
import { useState } from "react";

export default function RegisterLoginPage({ setIsLoggedIn }) {
  const [showRegisterForm, setShowRegisterForm] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);

  function registerForm() {
    setShowRegisterForm(true);
    setShowLoginForm(false);
  }
  function loginForm() {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  }
  return (
    <>
      <div className={styles.registerLogin_container}>
        <div className={styles.registerLogin_subcontainer}>
          <h2 className={styles.quiz_title}>QUIZZIE</h2>
          <div className={styles.loginRegister_btns_wrapper}>
            <div className={styles.signup_btn} onClick={registerForm}>
              Sign Up
            </div>
            <div className={styles.login_btn} onClick={loginForm}>
              Log In
            </div>
          </div>
          <div className={styles.form_container}>
            {showRegisterForm && <Register setIsLoggedIn={setIsLoggedIn} />}
            {showLoginForm && <Login setIsLoggedIn={setIsLoggedIn} />}
          </div>
        </div>
      </div>
    </>
  );
}
