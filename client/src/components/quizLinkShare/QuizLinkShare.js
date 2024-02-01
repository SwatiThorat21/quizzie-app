import styles from "./quizLinkShare.module.css";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function QuizLinkShare({ quizId }) {

  const navigate = useNavigate();

  const copyToClipboard = () => {
    let copyText =`${window.location.origin}/quiz?quizId=${quizId}`;
    let isCopy = copy(copyText);
    if (isCopy) {
      toast.success("Copied to Clipboard");
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      const modal = document.querySelector(`.${styles.quizLink_modal}`);
    if (modal && !modal.contains(event.target)) {

        navigate('/dashboard');
      }
    });
  }, [navigate]);



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
              {window.location.origin}/quiz?quizId={quizId}
            </div>
            <div className={styles.modalBtns_wrapper}>
              <button className={styles.shareLink_btn} onClick={copyToClipboard}>Share</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
