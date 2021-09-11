export const getSelectionAnimation = (arr) => {
  const copy = [...arr];
  const n = copy.length;
  const animeStory = [];

  for (let i = 0; i < n; i++) {
    let minIdx = i;

    for (let j = i; j < n; j++) {
      animeStory.push([[i, j], null, false]);

      if (copy[minIdx] > copy[j]) {
        minIdx = j;
      }
    }
    animeStory.push([
      null,
      [
        [i, copy[minIdx]],
        [minIdx, copy[i]],
      ],
      true,
    ]);
    let temp = copy[i];
    copy[i] = copy[minIdx];
    copy[minIdx] = temp;
  }

  return animeStory;
};

const test = [4, 5, 7, 1, 3, 6, 9];

console.log(getSelectionAnimation(test));
