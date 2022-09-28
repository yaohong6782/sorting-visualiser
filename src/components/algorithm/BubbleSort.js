export const bubbleSort = (array) => {
  let animations = [];
  let sorted;
  while (!sorted) {
    for (let i = 0; i < array.length - 1; i++) {

      animations.push([i, i + 1, true]);
      animations.push([i, i + 1, true]);

      if (array[i] > array[i + 1]) {
        animations.push([i, array[i + 1], false]);
        animations.push([i + 1, array[i], false]);

        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    // console.log(animations);
    sorted = checkArray(array);
  }
  return animations;
};

const checkArray = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
};
