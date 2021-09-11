export const generateArray = (max, size) => {
  let arr = [];
  for (let i = 0; i < size; i++) {
    let x = Math.floor(Math.random() * (max - 5) + 5);
    arr.push(x);
  }
  return arr;
};
