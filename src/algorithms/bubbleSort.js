export const getBubbleAnimation = (arr) => {
  const copy = [...arr];
  const n = copy.length;
  const animeStory = [];
  let unsortedArrayLength = n - 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < unsortedArrayLength; j++) {
      // comparison
      animeStory.push([[j, j + 1], null, false]);
      if (copy[j] > copy[j + 1]) {
        //swap
        animeStory.push([
          null,
          [
            [j, copy[j + 1]],
            [j + 1, copy[j]],
          ],
          true,
        ]);
        let temp = copy[j];
        copy[j] = copy[j + 1];
        copy[j + 1] = temp;
      }
    }
    unsortedArrayLength--;
  }

  return animeStory;
};
