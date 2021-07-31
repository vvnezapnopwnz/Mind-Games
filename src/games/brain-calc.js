import engine from '../index.js';
import randomNumber from './random-number.js';

export const gameInfo = 'Whats is the result of the expression?';

const calculateResult = (r, x, y) => {
  if (r < 3.3) {
    return x + y;
  } if (r < 6.6) {
    return x - y;
  }
  return x * y;
};

export const calculateValues = () => {
  let question = '';
  const x = randomNumber();
  const y = randomNumber();
  const randomOperator = randomNumber() / 10;
  if (randomOperator < 3.3) {
    question = `${x} + ${y}`;
  } else if (randomOperator < 6.6) {
    question = `${x} - ${y}`;
  } else {
    question = `${x} * ${y}`;
  }
  const trueAnswer = String(calculateResult(randomOperator, x, y));
  return [question, trueAnswer];
};
export const brainCalculator = () => engine(calculateValues, gameInfo);
