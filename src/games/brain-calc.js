// import engine from '../index.js';
// import randomNumber from '../utilities.js';

// export const gameInfo = 'Whats is the result of the expression?';

// const calculateResult = (r, x, y) => {
//   if (r < 3.3) {
//     return x + y;
//   } if (r < 6.6) {
//     return x - y;
//   }
//   return x * y;
// };

// export const calculateValues = () => {
//   let question = '';
//   const x = randomNumber(100, 1);
//   const y = randomNumber(100, 1);
//   const randomOperator = randomNumber(11, 1);
//   if (randomOperator < 3.3) {
//     question = `${x} + ${y}`;
//   } else if (randomOperator < 6.6) {
//     question = `${x} - ${y}`;
//   } else {
//     question = `${x} * ${y}`;
//   }
//   const trueAnswer = String(calculateResult(randomOperator, x, y));
//   return [question, trueAnswer];
// };
// export const brainCalculator = () => engine(calculateValues, gameInfo);

import engine from '../index.js';
import randomNumber from '../utilities.js';

export const gameInfo = 'Whats is the result of the expression?';

const calculateResult = (r, num1, num2) => {
  let result = 0;
  switch (r) {
    case '*':
      result = num1 * num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    default:
      break;
  }
  return result;
};

export const calculateValues = () => {
  const operatorsStr = '+-*';
  const num1 = randomNumber(100, 1);
  const num2 = randomNumber(100, 1);
  const getRandomOperator = randomNumber(3, 0);
  const question = `${num1} ${operatorsStr[getRandomOperator]} ${num2}`;
  const trueAnswer = String(calculateResult(operatorsStr[getRandomOperator], num1, num2));
  return [question, trueAnswer];
};
export const brainCalculator = () => engine(calculateValues, gameInfo);
