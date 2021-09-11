export const getInsertionAnimation = (arr) => {
  // copy array to not change state
  const copy = [...arr];
  const animeStory = [];

  for (let i = 0; i < copy.length; i++) {
    let j = i;
    for (j = i; j > 0; j--) {
      animeStory.push([[j, j - 1], null, false]);
      if (copy[j] < copy[j - 1]) {
        animeStory.push([
          null,
          [
            [j - 1, copy[j]],
            [j, copy[j - 1]],
          ],
          true,
        ]);
        let temp = copy[j];
        copy[j] = copy[j - 1];
        copy[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return animeStory;
};
