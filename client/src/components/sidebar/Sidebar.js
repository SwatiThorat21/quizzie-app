import styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";

export default function Sidebar({ setIsLoggedIn }) {
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      path: "/analytics",
      name: "Analytics",
    },
    {
      path: "/create-quiz",
      name: "Create Quiz",
    },
  ];

  function handleLogout() {
    localStorage.removeItem("jwToken");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
  }
  return (
    <>
      <div className={styles.sidebar_container}>
        <h2 className={styles.quiz_title}>QUIZZIE</h2>
        <div className={styles.sideMenu_wrapper}>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={styles.link}
              activeclassname={styles.active}
            >
              <div className={styles.link_text}>{item.name}</div>
            </NavLink>
          ))}
        </div>
        <p className={styles.logoutBtn} onClick={handleLogout}>
          LOGOUT
        </p>
      </div>
    </>
  );
}
