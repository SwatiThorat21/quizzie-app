import styles from "./countCards.module.css";

export default function CountCards() {
  return (
    <>
      <div className={styles.count_cards_container}>
        <div className={styles.count_card} style={{color: "#ff5d01", width:"85px"}}>
          <p className={styles.count_info}>
            <span style={{marginRight:"8px", fontSize:"2.2rem"}}>12</span>Quiz Created
          </p>
        </div>
        <div className={styles.count_card} style={{color: "#60b84b"}}>
          <p className={styles.count_info}>
            <span style={{marginRight:"8px", fontSize:"2.2rem"}}>110</span>Questions Created
          </p>
        </div>
        <div className={styles.count_card} style={{color: "#5076ff"}}>
          <p className={styles.count_info}>
            <span style={{marginRight:"8px", fontSize:"2.2rem"}}>99</span>Total Impressions
          </p>
        </div>
      </div>
    </>
  );
}
