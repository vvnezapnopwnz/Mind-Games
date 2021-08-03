import engine from '../index.js';
import randomNumber from '../utilities.js';

const gameInfo = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

export const calculateValues = () => {
  const number = randomNumber(100, 1);
  const trueAnswer = isEven(number) ? 'yes' : 'no';
  return [number, trueAnswer];
};
export const brainEven = () => engine(calculateValues, gameInfo);
