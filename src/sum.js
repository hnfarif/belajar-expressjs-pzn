export const sum = (a, b) => {
  return a + b;
};

export const sumAll = (numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });

  return sum;
};

export const calculate = (numbers, callback) => {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  callback(sum);
};

export const calculateAndReturn = (numbers, callback) => {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return callback(sum);
};
