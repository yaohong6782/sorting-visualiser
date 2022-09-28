import React, { useState, useEffect } from "react";
// import styles from "./SortingVisualiser.module.css";
import { bubbleSort } from "./algorithm/BubbleSort";
import { mergeSortAlgo } from "./algorithm/MergeSort";
import { getQuickSortAnimations, quickSortAlgo } from "./algorithm/QuickSort";

import "./SortingVisualiser.css";
const SortingVisualiser = () => {
  const PRI_COLOR = "#408080";
  const SEC_COLOR = "red";
  const SPEED = 3;


  const NUM_OF_ARRAY_BARS = 100;
  const [arrayBars, setArrayBars] = useState([]);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < NUM_OF_ARRAY_BARS; i++) {
      array.push(randomIntegersFromRange(20, 600));
    }
    setArrayBars(array);
  };

  useEffect(() => {
    resetArray();
  }, []);

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

  }

  return (
    <div className="array-wrapper">
      {arrayBars.map((value, idx) => (
        <div
          className="array-bar"
          key={idx}
          style={{ background: PRI_COLOR, height: `${value}px` }}
        ></div>
      ))}
      <br></br>

      <button onClick={resetArray}> Generate Array </button>
      <button onClick={bubbleSorting}> Bubble Sort </button>
      <button onClick={mergeSorting}> Merge Sort </button>
      <button onClick={quickSorting}>Quick Sort</button>
    </div>
  );
};

const randomIntegersFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export default SortingVisualiser;

// const [barOneIdx, barTwoIdx] = animations[i];
//         const barOneStyle = arrayBars[barOneIdx].style;
//         const barTwoStyle = arrayBars[barTwoIdx].style;
//         let color = "";

//         if (i % 3 === 0 || i % 3 === 2){
//             if (i % 3 === 0){
//                 color = PRI_COLOR;
//             }
//             if (i % 3 === 2) {
//                 color = SEC_COLOR;
//             }
//             setTimeout(() => {
//                 barOneStyle.backgroundColor = color;
//                 barTwoStyle.backgroundColor = color;
//             }, i * SPEED);
//         }
//         else {
//             setTimeout(() => {
//                 let temp = barOneStyle.height;
//                 barOneStyle.height = barTwoStyle.height;
//                 barTwoStyle.height = temp;
//             }, i * SPEED)
//         }


/*
    const animations = getQuickSortAnimations(arrayBars)
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "comparison1" ||
        animations[i][0] === "comparison2";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange === true) {
        const color =
          animations[i][0] === "comparison1"
            ? SEC_COLOR
            : PRI_COLOR;
        const [, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * SPEED);
      } else {
        const [, barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * SPEED);
      }
    }
*/