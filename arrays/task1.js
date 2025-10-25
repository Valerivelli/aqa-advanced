const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
  validateNumber(numbers[i]);
}
console.log(
  'Count of positive Numbers: ',
  positiveCount,
);
console.log(
  'Count of negative Numbers: ',
  negativeCount,
);
console.log('Count of zero Numbers: ', zeroCount);

function validateNumber(number) {
  if (number < 0) {
    negativeCount++;
  } else if (number === 0) {
    zeroCount++;
  } else if (number > 0) {
    positiveCount++;
  }
}
