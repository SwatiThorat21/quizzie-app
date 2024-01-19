import styles from "./countCards.module.css";

export default function CountCards() {
  return (
    <>
      <div className={styles.count_cards_container}>
        <div className={styles.count_card}>
          <p className={styles.count_info}>
            <span>12</span>Quiz
          </p>
          <p className={styles.count_info}>Created</p>
        </div>
        <div className={styles.count_card}>
          <p className={styles.count_info}>
            <span>110</span>questions
          </p>
          <p className={styles.count_info}>Created</p>
        </div>
        <div className={styles.count_card}>
          <p className={styles.count_info}>
            <span>99</span>Total
          </p>
          <p className={styles.count_info}>Impressions</p>
        </div>
      </div>
    </>
  );
}
