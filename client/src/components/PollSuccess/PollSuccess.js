import styles from "./pollsuccess.module.css";

export default function PollSuccess() {
  return (
    <>
      <div className={styles.poll_success_container}>
        <div style={{ margin: "auto", textAlign: "center", fontWeight: "600", width:"100%"}}>
          <p data-text="Thank you" className={styles.poll_success_text}>
            Thank you
          </p>
          <p
            data-text="for participating in"
            className={styles.poll_success_text}
          >
            for participating in
          </p>
          <p data-text="the Poll" className={styles.poll_success_text}>
            the Poll
          </p>
        </div>
      </div>
    </>
  );
}
