import { useState } from "react/cjs/react.development";
import styles from "./SortingControls.module.css";

const SortingControls = (props) => {
  const callerHandler = () => {
    props.onInsertionSort();
  };

  const onChangeHandler = (e) => {
    props.onSetSize(e.target.value);
    console.log(props.size);
  };

  return (
    <section className={styles["sorting-controls-container"]}>
      <div className={styles["sorting-controls"]}>
        <button onClick={props.onReset} className={styles.btn}>
          Generate
        </button>
        <div className={styles["size-ctrl"]}>
          <label>Size</label>
          <input
            type="range"
            min="5"
            max="150"
            value={props.size}
            onChange={onChangeHandler}
            className={styles.range}
          />
        </div>
        <button className={styles.btn} onClick={callerHandler}>
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
