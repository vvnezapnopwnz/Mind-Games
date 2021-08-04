import engine from '../index.js';
import randomNumber from '../utilities.js';

export const gameInfo = 'Whats is the result of the expression?';

const calculateResult = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw Error('No such operator.');
  }
};

export const calculateValues = () => {
  const operators = '+-*';
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const getRandom = randomNumber(0, 2);
  const question = `${num1} ${operators[getRandom]} ${num2}`;
  const answer = String(calculateResult(operators[getRandom], num1, num2));
  return [question, answer];
};
export const brainCalculator = () => engine(calculateValues, gameInfo);
