import styles from "./SortingControls.module.css";

const SortingControls = (props) => {
  const callerHandler = () => {
    props.onInsertionSort();
  };

  const onChangeSizeHandler = (e) => {
    props.onChangeSize(e.target.value);
  };
  const onChangeSpeedHandler = (e) => {
    props.onChangeSpeed(e.target.value);
    console.log(props.speed);
  };

  const buttonClass = `${styles.btn} ${props.disabled ? "disabled" : ""}`;

  return (
    <section className={styles["sorting-controls-container"]}>
      <div className={styles["sorting-controls"]}>
        <button onClick={props.onReset} className={buttonClass}>
          Generate
        </button>
        <div className={styles["size-ctrl"]}>
          <label>Size</label>
          <input
            type="range"
            min="5"
            max="150"
            value={props.size}
            onChange={onChangeSizeHandler}
            className={styles.range}
          />
        </div>
        <div className={styles["size-ctrl"]}>
          <label>Speed</label>
          <input
            type="range"
            min="30"
            max="1000"
            value={props.speed}
            onChange={onChangeSpeedHandler}
            className={styles.range}
          />
        </div>
        <button className={buttonClass} onClick={callerHandler}>
          Insertion Sort
        </button>
        <button className={styles.btn} onClick={callerHandler}>
          Selection Sort
        </button>
        <button className={styles.btn} onClick={callerHandler}>
          Bubble Sort
        </button>
        <button className={styles.btn} onClick={callerHandler}>
          Merge Sort
        </button>
        <button className={styles.btn} onClick={callerHandler}>
          Quick Sort
        </button>
      </div>
    </section>
  );
};

export default SortingControls;
