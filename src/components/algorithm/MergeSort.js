const mergeSortAlgo = (array) => {
    const animations = [];
    
    if (array.length <= 1) return array;
    const auxArray = array.slice();
    mergeSortHelper(array,0,array.length-1, auxArray, animations);
    return animations;
}

const mergeSortHelper = (mainArray, startIdx, endIdx, auxArray, animations) => {
  if (startIdx === endIdx) return;

  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxArray, animations);
};

const doMerge = (
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxArray,
  animations
) => {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;

  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);

    animations.push([i, j]);

    if (auxArray[i] <= auxArray[j]) {
      animations.push([k, auxArray[i]]);
      mainArray[k++] = auxArray[i++];
    } else {
      animations.push([k, auxArray[j]]);
      mainArray[k++] = auxArray[j++];
    }
  }

  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);

    animations.push([k, auxArray[i]]);
    mainArray[k++] = auxArray[i++];
  }

  while (j <= endIdx) {
    animations.push([j, j]);

    animations.push([j, j]);

    animations.push([k, auxArray[j]]);

    mainArray[k++] = auxArray[j++];
  }
};

exports.mergeSortHelper = mergeSortHelper;
exports.doMerge = doMerge;
exports.mergeSortAlgo = mergeSortAlgo;