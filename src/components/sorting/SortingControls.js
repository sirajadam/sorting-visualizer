import styles from "./SortingControls.module.css";

const SortingControls = (props) => {
  const callerHandler = () => {
    props.onInsertionSort();
  };

  return (
    <section className={styles["sorting-controls-container"]}>
      <div className={styles["sorting-controls"]}>
        <button onClick={props.onReset} className={styles.btn}>
          Generate
        </button>
        <button className={styles.btn} onClick={callerHandler}>
          Insertion Sort
        </button>
      </div>
    </section>
  );
};

export default SortingControls;
