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
  const operatorsStr = '+-*';
  const num1 = randomNumber(100, 1);
  const num2 = randomNumber(100, 1);
  const getRandomOperator = randomNumber(2, 0);
  const question = `${num1} ${operatorsStr[getRandomOperator]} ${num2}`;
  const answer = String(calculateResult(operatorsStr[getRandomOperator], num1, num2));
  return [question, answer];
};
export const brainCalculator = () => engine(calculateValues, gameInfo);
