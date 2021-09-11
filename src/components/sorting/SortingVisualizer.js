import React, { useState, useRef, useEffect } from "react";
import styles from "./SortingVisualizer.module.css";
import { generateArray } from "../../utility/generateArray";
import { getInsertionAnimation } from "../../algorithms/insertionSort";
import { getBubbleAnimation } from "../../algorithms/bubbleSort";
import { getSelectionAnimation } from "../../algorithms/selectoionSort";

const SortingVisualizer = () => {
  const arrBarRef = useRef();
  const [arrSize, setArrSize] = useState(75);
  const [arrSpeed, setArrSpeed] = useState(10);
  const [array, setArray] = useState([50, 40, 30, 20, 10]);
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const generateNewArray = () => {
    if (isSorting) {
      console.log("ARRAY IS CURRENTLY SORTING");
      return;
    }
    setArray(generateArray(149, arrSize));
    // Resetting color of array -> refactor when time
    for (let i = 0; i < arrBarRef.current.children.length; i++) {
      arrBarRef.current.children[i].style.background = "#7e22ce";
    }
    setIsSorted(false);
  };

  useEffect(() => {
    generateNewArray();
  }, [arrSize]);

  // Sorting algorithms
  const insertionSort = () => {
    highlightAnimation(getInsertionAnimation(array));
  };

  const bubbleSort = () => {
    highlightAnimation(getBubbleAnimation(array));
  };
  const selectionSort = () => {
    highlightAnimation(getSelectionAnimation(array));
  };

  // End of Sorting algorithms

  // Highlights arraybar at index idx
  const highlightElementComparison = (idx, type) => {
    const arrBars = arrBarRef.current.children;

    arrBars[idx].style.background = "#0ea5e9";

    setTimeout(() => {
      arrBars[idx].style.background = "#7e22ce";
    }, arrSpeed);
  };

  const highlightSuccess = () => {
    const arrBars = arrBarRef.current.children;

    for (let i = 0; i < arrBars.length; i++) {
      setTimeout(() => {
        arrBars[i].style.background = "#16A34A";
      }, i * arrSpeed);
    }
  };

  const highlightAnimation = (arr) => {
    // Check if already is sorting
    if (isSorting || isSorted) return;
    setIsSorting(true);
    // Looping through animation array arr
    for (let i = 0; i < arr.length; i++) {
      const [comparisonIndex, swappedValues, swap] = arr[i];
      setTimeout(() => {
        if (!swap) {
          const [i, j] = comparisonIndex;
          highlightElementComparison(i);
          highlightElementComparison(j);
        } else {
          const [idx1, val1] = swappedValues[0];
          const [idx2, val2] = swappedValues[1];
          arrBarRef.current.children[idx1].style.height = `${val1 * 5}px`;

          arrBarRef.current.children[idx2].style.height = `${val2 * 5}px`;
        }
      }, i * arrSpeed);
      // Setting state in (arr.length * arrSpeed) ms since setTimeout is non-blocking
      setTimeout(() => {
        highlightSuccess();
        setIsSorting(false);
        setIsSorted(true);
      }, arr.length * arrSpeed);
    }
  };

  // Buttons Control

  const inputSliderSizeHandler = (e) => {
    setArrSize(e.target.value);
  };
  const inputSliderSpeedHandler = (e) => {
    setArrSpeed(e.target.value);
  };

  const reloadHandler = () => {
    window.location.reload();
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
      <section className={styles["sorting-controls-container"]}>
        <div className={styles["sorting-controls"]}>
          {isSorting ? (
            <div className={styles.reload} onClick={reloadHandler}>
              <i class="fi-rr-rotate-right"></i>
            </div>
          ) : (
            ""
          )}

          <button
            disabled={isSorting}
            onClick={generateNewArray}
            className={styles.btn}
          >
            Generate
          </button>
          <div className={styles["size-ctrl"]}>
            <label>Size</label>
            <input
              type="range"
              disabled={isSorting}
              min="5"
              max="150"
              value={arrSize}
              onChange={inputSliderSizeHandler}
              className={styles.range}
            />
          </div>
          <div className={styles["size-ctrl"]}>
            <label>Speed (ms)</label>
            <input
              type="range"
              disabled={isSorting}
              min="10"
              max="1000"
              value={arrSpeed}
              onChange={inputSliderSpeedHandler}
              className={styles.range}
            />
          </div>
          <button
            disabled={isSorting}
            className={styles.btn}
            onClick={insertionSort}
          >
            Insertion Sort
          </button>
          <button
            disabled={isSorting}
            className={styles.btn}
            onClick={bubbleSort}
          >
            Bubble Sort
          </button>
          <button
            disabled={isSorting}
            className={styles.btn}
            onClick={selectionSort}
          >
            Selection Sort
          </button>
          <button
            disabled={isSorting}
            className={styles.btn}
            onClick={insertionSort}
          >
            Merge Sort
          </button>
          <button
            disabled={isSorting}
            className={styles.btn}
            onClick={insertionSort}
          >
            Quick Sort
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SortingVisualizer;
