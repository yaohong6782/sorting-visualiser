import React, { useState, useEffect } from "react";
// import styles from "./SortingVisualiser.module.css";
import { bubbleSort } from "./algorithm/BubbleSort";
import { mergeSortAlgo } from "./algorithm/MergeSort";
import { quickSortAlgo } from "./algorithm/QuickSort";

import "./SortingVisualiser.css";
const SortingVisualiser = () => {
  const PRI_COLOR = "#408080";
  const SEC_COLOR = "red";
  const SPEED = 3;

  const [numOfBars, setNumOfBars] = useState(40);
  const [arrayBars, setArrayBars] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const NUM_OF_ARRAY_BARS = numOfBars;
  const resetArray = () => {
    const array = [];
    for (let i = 0; i < NUM_OF_ARRAY_BARS; i++) {
      array.push(randomIntegersFromRange(20, 600));
    }
    setArrayBars(array);
  };

  useEffect(() => {
    resetArray();
  }, [numOfBars]);

  const mergeSorting = () => {
    const animations = mergeSortAlgo(arrayBars);
    for (let i = 0; i < animations.length; i++) {

      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SEC_COLOR : PRI_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * SPEED);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * SPEED);
      }
    }

  };
  const bubbleSorting = () => {
    const animations = bubbleSort(arrayBars);
    for (let i = 0; i < animations.length; i++) {

      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = animations[i][2];
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 2 === 0 ? SEC_COLOR : PRI_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * SPEED);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * SPEED);
      }
    }
    
  };

  const quickSorting = () => {
    const animations = quickSortAlgo(arrayBars);

    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][2];
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange === true) {
        const color = i % 2 === 0 ? SEC_COLOR : PRI_COLOR;
        // const color = animations[i][0] === true ? SEC_COLOR : PRI_COLOR
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * SPEED);
      } else {
        const [barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * SPEED);
      }
    }

  };

  return (
    <>
      <div className="array-wrapper">
        {arrayBars.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ background: PRI_COLOR, height: `${value}px` }}
          ></div>
        ))}

        <br></br>

        <button className="btn" disabled={isDisabled} onClick={resetArray}>
          {" "}
          Generate Array{" "}
        </button>
        <button className="btn" disabled={isDisabled} onClick={bubbleSorting}>
          {" "}
          Bubble Sort{" "}
        </button>
        <button className="btn" disabled={isDisabled} onClick={mergeSorting}>
          {" "}
          Merge Sort{" "}
        </button>
        <button className="btn" disabled={isDisabled} onClick={quickSorting}>
          Quick Sort
        </button>
        <br></br>
        <div className="slider-wrapper">
          <label>Number of bars : </label>
          <input
            className="slider"
            type="range"
            min="30"
            max="120"
            onChange={(e) => setNumOfBars(e.target.value)}
          ></input>
        </div>
      </div>
    </>
  );
};

const randomIntegersFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export default SortingVisualiser;
