export const quickSort = (array) => {
    let animations = [];
    
    quickSortHelper(array,0, array.length-1, animations);
    
    return animations
}

const quickSortHelper = (mainArray, startIdx, endIdx, animations) => {
    
    let pivotIdx;
    // sort ended 
    if (startIdx === endIdx){
        return;
    }

    if (startIdx < endIdx){
        pivotIdx = partitionArray(mainArray, startIdx, endIdx, animations);
        quickSortHelper(mainArray, startIdx, pivotIdx-1, animations);
        quickSortHelper(mainArray, pivotIdx+1, endIdx, animations);
    }
}

const partitionArray = (mainArray, startIdx, endIdx, animations) => {
    let pivotIdx = randomIntegersFromRange(startIdx,endIdx);

    animations.push([pivotIdx, endIdx, true]);
    animations.push([pivotIdx, mainArray[endIdx], false]);
    animations.push([endIdx, mainArray[pivotIdx], false]);
    animations.push([pivotIdx, endIdx, true]);
    swapPosition(mainArray,startIdx, endIdx);

    let curr = startIdx;

    // starting the hectic animations 
    // reference from merge sort 
    for (let i = startIdx; i < endIdx; i++){
        animations.push([i, endIdx, true]);
        animations.push([i, endIdx, true])

        if (mainArray[i] <= mainArray[endIdx]){
            animations.push([i, curr, true]);
            animations.push([i, mainArray[curr], false]);
            animations.push([curr, mainArray[i], false]);
            animations.push([i, curr, true]);

            swapPosition(mainArray, i, curr);
            curr+=1;
        }
    }
    animations.push([curr, endIdx, true]);
    animations.push([endIdx, mainArray[curr], false]);
    animations.push([curr, mainArray[endIdx], false]);
    animations.push([curr, curr, true]);

    swapPosition(mainArray, curr, endIdx);
    return curr;

}
const randomIntegersFromRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


const swapPosition = (mainArray, startIdx, endIdx) => {
    let temp = mainArray[startIdx]
    mainArray[startIdx] = mainArray[endIdx];
    mainArray[endIdx] = temp;
}