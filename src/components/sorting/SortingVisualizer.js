import React, { useState, useRef, useEffect } from "react";
import styles from "./SortingVisualizer.module.css";
import { generateArray } from "../../helper/generateArray";
import SortingControls from "./SortingControls";

const SortingVisualizer = () => {
  const arrBarRef = useRef([]);
  const [array, setArray] = useState(generateArray(100, 10));
  const [isSorting, setIsSorting] = useState();
  const [isSorted, setIsSorted] = useState(false);

  const resetArray = () => {
    setArray(generateArray(100, 10));
    if (isSorted) {
      for (let i = 0; i < arrBarRef.current.children.length; i++) {
        arrBarRef.current.children[i].style.background = "#0ea5e9";
      }
    }
    setIsSorted(false);
  };

  const insertionSort = () => {
    const arrBars = arrBarRef.current.children;
    let arr = array.slice();
    for (let i = 0; i < arr.length; i++) {
      // console.error("EXPECT");
      let j = i;
      while (j > 0 && arr[j - 1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        j--;
        setArray(arr);
      }
      arrBars[j].style.background = "#0ea5e9";
    }
    setIsSorted(true);

    if (isSorted) {
      for (let i = 0; i < arrBars.length; i++) {
        setTimeout(() => {
          arrBars[i].style.background = "#22C55E";
        }, i * 80);
      }
    }
  };

  return (
    <React.Fragment>
      <section ref={arrBarRef} className={styles["sorting-app-container"]}>
        {array.map((n, i) => (
          <div
            key={i}
            className={styles.bar}
            style={{ height: `${n * 5}px` }}
          ></div>
        ))}
      </section>
      <SortingControls onReset={resetArray} onInsertionSort={insertionSort} />
    </React.Fragment>
  );
};

export default SortingVisualizer;
