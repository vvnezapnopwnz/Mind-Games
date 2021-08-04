import engine from '../index.js';
import randomNumber from '../utilities.js';

const gameInfo = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (question) => (question % 2 === 0);

export const calculateValues = () => {
  const question = randomNumber(100, 1);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return [question, trueAnswer];
};
export const brainEven = () => engine(calculateValues, gameInfo);
