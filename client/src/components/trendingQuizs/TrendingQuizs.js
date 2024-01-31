import styles from "./trendingQuizs.module.css";
import eyeImg from "../../images/eye.png";

export default function TrendingQuizs() {
  return (
    <>
      <div className={styles.trendingQuizs_cards_container}>
        <h2 className={styles.trendingQuiz_title}>Trending Quizs</h2>
        <div className={styles.quizCrads_container}>
          {/* <p style={{color:"#f8792f"}}>You haven't created any Quiz, Click on Create Quiz to create your first Quiz</p> */}
          <div className={styles.quiz_card}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <p style={{fontSize:"1.3rem"}}>Quiz 1</p>
              <p style={{color:"#ff5d01", display:"flex", alignItems:"center", gap:"3px", fontWeight:"600"}}>
                667<img src={eyeImg} alt="eyeImg"></img>
              </p>
            </div>
            <p style={{color:"#60b84b", marginTop:"5px"}}>Created on: 04 Sep, 2023</p>
          </div>
          <div className={styles.quiz_card}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <p style={{fontSize:"1.3rem"}}>Quiz 1</p>
              <p style={{color:"#ff5d01", display:"flex", alignItems:"center", gap:"3px", fontWeight:"600"}}>
                667<img src={eyeImg} alt="eyeImg"></img>
              </p>
            </div>
            <p style={{color:"#60b84b", marginTop:"5px"}}>Created on: 04 Sep, 2023</p>
          </div>
          <div className={styles.quiz_card}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <p style={{fontSize:"1.3rem"}}>Quiz 1</p>
              <p style={{color:"#ff5d01", display:"flex", alignItems:"center", gap:"3px", fontWeight:"600"}}>
                667<img src={eyeImg} alt="eyeImg"></img>
              </p>
            </div>
            <p style={{color:"#60b84b", marginTop:"5px"}}>Created on: 04 Sep, 2023</p>
          </div>
          <div className={styles.quiz_card}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <p style={{fontSize:"1.3rem"}}>Quiz 1</p>
              <p style={{color:"#ff5d01", display:"flex", alignItems:"center", gap:"3px", fontWeight:"600"}}>
                667<img src={eyeImg} alt="eyeImg"></img>
              </p>
            </div>
            <p style={{color:"#60b84b", marginTop:"5px"}}>Created on: 04 Sep, 2023</p>
          </div>
          <div className={styles.quiz_card}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <p style={{fontSize:"1.3rem"}}>Quiz 1</p>
              <p style={{color:"#ff5d01", display:"flex", alignItems:"center", gap:"3px", fontWeight:"600"}}>
                667<img src={eyeImg} alt="eyeImg"></img>
              </p>
            </div>
            <p style={{color:"#60b84b", marginTop:"5px"}}>Created on: 04 Sep, 2023</p>
          </div>
          <div className={styles.quiz_card}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <p style={{fontSize:"1.3rem"}}>Quiz 1</p>
              <p style={{color:"#ff5d01", display:"flex", alignItems:"center", gap:"3px", fontWeight:"600"}}>
                667<img src={eyeImg} alt="eyeImg"></img>
              </p>
            </div>
            <p style={{color:"#60b84b", marginTop:"5px"}}>Created on: 04 Sep, 2023</p>
          </div>
          <div className={styles.quiz_card}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <p style={{fontSize:"1.3rem"}}>Quiz 1</p>
              <p style={{color:"#ff5d01", display:"flex", alignItems:"center", gap:"3px", fontWeight:"600"}}>
                667<img src={eyeImg} alt="eyeImg"></img>
              </p>
            </div>
            <p style={{color:"#60b84b", marginTop:"5px"}}>Created on: 04 Sep, 2023</p>
          </div>
          <div className={styles.quiz_card}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <p style={{fontSize:"1.3rem"}}>Quiz 1</p>
              <p style={{color:"#ff5d01", display:"flex", alignItems:"center", gap:"3px", fontWeight:"600"}}>
                667<img src={eyeImg} alt="eyeImg"></img>
              </p>
            </div>
            <p style={{color:"#60b84b", marginTop:"5px"}}>Created on: 04 Sep, 2023</p>
          </div>
        </div>
      </div>
    </>
  );
}
