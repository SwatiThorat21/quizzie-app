import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <>
      <div className={styles.sidebar_container}>
        <h2 className={styles.quiz_title}>QUIZZIE</h2>
        <div className={styles.sideMenu_wrapper}>
            <p className={styles.menu}>Dashboard</p>
            <p className={styles.menu}>Analytics</p>
            <p className={styles.menu}>Create Quiz</p>
        </div>
        <p className={styles.logoutBtn}>LOGOUT</p>
      </div>
    </>
  );
}
