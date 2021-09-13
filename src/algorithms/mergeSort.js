function getMergeAnimation(arr) {
  const copy = [...arr];
  const n = copy.length;
  const mainArr = [];
  const animeStory = [];
  mergeSortHelper(copy, mainArr);
  return animeStory;
}

function mergeSortHelper() {}

function mergeSort(arr) {
  const n = arr.length;

  if (n == 1) return arr;

  const middle = Math.floor(n / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      result.push(right[rightIndex++]);
    } else {
      result.push(left[leftIndex++]);
    }
  }

  while (leftIndex < left.length) result.push(left[leftIndex++]);
  while (rightIndex < right.length) result.push(right[rightIndex++]);

  console.log(left, right);
  console.log(result);
  return result;
}
