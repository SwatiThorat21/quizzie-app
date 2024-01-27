import styles from "./quizLinkShare.module.css";

export default function QuizLinkShare() {
  const urlParams = new URLSearchParams(window.location.search);
  const quizId = urlParams.get("quizId");
  return (
    <>
      <div className={styles.quizLink_container}>
        <div className={styles.quizLink_modal}>
          <div className={styles.modal_content}>
            <p>
              Congrats your Quiz is <br />
              Published!
            </p>
            <div className={styles.quiz_link}>
              http://localhost:3000/quiz?quizId={quizId}
            </div>
            <div className={styles.modalBtns_wrapper}>
              <button className={styles.shareLink_btn}>Share</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
