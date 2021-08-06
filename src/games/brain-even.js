import launch from '../index.js';
import randomNumber from '../utilities.js';

const gameInfo = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (question) => (question % 2 === 0);

export const calculateValues = () => {
  const question = randomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
export const brainEven = () => launch(calculateValues, gameInfo);
