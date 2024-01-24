import styles from "./RegisterLoginPage.module.css";
import Register from "../../components/register/Register";
import Login from "../../components/login/Login";

export default function RegisterLoginPage({
  setIsLoggedIn,
  isLoggedIn
}) {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className={styles.registerLogin_container}>
        <div className={styles.registerLogin_subcontainer}>
          <h2 className={styles.quiz_title}>QUIZZIE</h2>
          <div className={styles.loginRegister_btns_wrapper}>
            <div className={styles.signup_btn} onClick={handleRegister}>
              Sign Up
            </div>
            <div className={styles.login_btn} onClick={handleLogin}>
              Log In
            </div>
          </div>
          <div className={styles.form_container}>
            {!isLoggedIn ? (
              <Register setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
