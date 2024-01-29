import styles from "./quizLinkShare.module.css";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";

export default function QuizLinkShare({ quizId }) {

  const copyToClipboard = () => {
    let copyText =`http://localhost:3000/quiz?quizId=${quizId}`;
    let isCopy = copy(copyText);
    if (isCopy) {
      toast.success("Copied to Clipboard");
    }
  };

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
              <button className={styles.shareLink_btn} onClick={copyToClipboard}>Share</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
