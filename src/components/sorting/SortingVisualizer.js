import React, { useState, useRef, useEffect } from "react";
import styles from "./SortingVisualizer.module.css";
import { generateArray } from "../../utility/generateArray";
import { getInsertionAnimation } from "../../algorithms/insertionSort";

const SortingVisualizer = () => {
  const arrBarRef = useRef();
  const [arrSize, setArrSize] = useState(5);
  const [arrSpeed, setArrSpeed] = useState(10);
  const [array, setArray] = useState([50, 40, 30, 20, 10]);
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const generateNewArray = () => {
    console.log("IsSorting is currently: ", isSorting);
    if (isSorting) {
      console.log("ARRAY IS CURRENTLY SORTING");
      return;
    }
    setArray(generateArray(150, arrSize));
    // Resetting color of array
    for (let i = 0; i < arrBarRef.current.children.length; i++) {
      arrBarRef.current.children[i].style.background = "#0ea5e9";
    }
    setIsSorted(false);
  };

  useEffect(() => {
    generateNewArray();
  }, [arrSize]);

  // Sorting algorithms
  const insertionSort = () => {
    if (isSorted) {
      console.log("ARRAY IS SORTED");
      return;
    }
    setIsSorting(true);
    const animeStory = getInsertionAnimation(array);
    highlightAnimation(animeStory);
    setTimeout(() => {
      setIsSorting(false);
    }, animeStory.length * arrSpeed);
  };

  const highlightElementComparison = (idx) => {
    const arrBars = arrBarRef.current.children;

    arrBars[idx].style.background = "purple";

    setTimeout(() => {
      arrBars[idx].style.background = "#0ea5e9";
    }, arrSpeed);
  };

  const highlightAnimation = (arr) => {
    if (isSorting) return;
    setIsSorting(true);
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
    }
  };

  const inputSliderSizeHandler = (e) => {
    setArrSize(e.target.value);
  };
  const inputSliderSpeedHandler = (e) => {
    setArrSpeed(e.target.value);
  };

  const reloadHandler = () => {
    window.location.reload();
  };

  const buttonClass = `${styles.btn} ${isSorting ? `${styles.disabled}` : ""}`;

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
            className={buttonClass}
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
            <label>Speed</label>
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
            className={buttonClass}
            onClick={insertionSort}
          >
            Insertion Sort
          </button>
          <button
            disabled={isSorting}
            className={buttonClass}
            onClick={insertionSort}
          >
            Selection Sort
          </button>
          <button
            disabled={isSorting}
            className={buttonClass}
            onClick={insertionSort}
          >
            Bubble Sort
          </button>
          <button
            disabled={isSorting}
            className={buttonClass}
            onClick={insertionSort}
          >
            Merge Sort
          </button>
          <button
            disabled={isSorting}
            className={buttonClass}
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
