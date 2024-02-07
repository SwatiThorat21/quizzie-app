import styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ setIsLoggedIn }) {
  const navigate = useNavigate();

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
      path: "/create-edit-quiz",
      name: "Create Quiz",
    },
  ];

  function handleLogout() {
    localStorage.removeItem("jwToken");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    navigate("/");
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
              style={({ isActive }) => {
                return {
                  boxShadow: isActive ? "0 0 14px 0 rgba(0, 0, 0, 0.12)" : "",
                };
              }}
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
