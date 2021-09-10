import React, { useState, useRef, useEffect } from "react";
import styles from "./SortingVisualizer.module.css";
import { generateArray } from "../../helper/generateArray";
import SortingControls from "./SortingControls";
import { getInsertionAnimation } from "../../algorithms/insertionSort";

const SortingVisualizer = () => {
  const arrBarRef = useRef([]);
  const [arrSize, setArrSize] = useState(5);
  const [arrSpeed, setArrSpeed] = useState(100);
  const [array, setArray] = useState([50, 40, 30, 20, 10]);
  const [isSorting, setIsSorting] = useState();
  const [isSorted, setIsSorted] = useState(false);

  const generateNewArray = () => {
    setArray(generateArray(150, arrSize));
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
    const animeStory = getInsertionAnimation(array);
    highlightAnimation(animeStory);
  };

  const highlightElementComparison = (idx) => {
    const arrBars = arrBarRef.current.children;

    arrBars[idx].style.background = "purple";

    setTimeout(() => {
      arrBars[idx].style.background = "#0ea5e9";
    }, arrSpeed);
  };

  const highlightSuccess = (idx) => {
    const arrBars = arrBarRef.current.children;

    arrBars[idx].style.background = "green";

    setTimeout(() => {
      arrBars[idx].style.background = "#0ea5e9";
    }, arrSpeed);
  };

  const highlightAnimation = (arr) => {
    if (isSorting) return;
    setIsSorting(true);
    for (let i = 0; i < arr.length; i++) {
      const [comparisonIndex, swappedValues, swap] = arr[i];
      console.log(comparisonIndex, swappedValues, swap);
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
    console.log("finished");
    // setIsSorted(true);
  };

  useEffect(() => {
    const arrBars = arrBarRef.current.children;

    if (isSorted) {
      for (let i = 0; i < arrBars.length; i++) {
        setTimeout(() => {
          arrBars[i].style.background = "green";
        }, i * 100);
      }
    }
  }, [isSorted]);

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
      <SortingControls
        disabled={isSorting}
        onReset={generateNewArray}
        onInsertionSort={insertionSort}
        onChangeSize={setArrSize}
        onChangeSpeed={setArrSpeed}
        size={arrSize}
        speed={arrSpeed}
      />
    </React.Fragment>
  );
};

export default SortingVisualizer;
