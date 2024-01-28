import styles from "./analytics.module.css";

export default function Analytics() {
  return (
    <>
      <div className={styles.analytics_table_container}>
        <div className={styles.analytics_table_wrapper}>
          <h1 className={styles.analytics_heading}>Quiz Analytics</h1>
          <table className={styles.analytics_table}>
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Quiz Name</th>
                <th>Created on</th>
                <th>Impression</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}
