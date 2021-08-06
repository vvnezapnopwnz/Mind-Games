import launch from '../index.js';
import randomNumber from '../utilities.js';

const gameInfo = 'Find the greatest common divisor of given numbers.';

const calculateDevisor = (first, second) => {
  let commonDevisor = 1;
  const calculationRange = first > second ? second : first;
  for (let i = 1; i <= calculationRange; i += 1) {
    if (first % i === 0 && second % i === 0) {
      commonDevisor = i;
    }
  }
  return commonDevisor;
};

export const calculateValues = () => {
  const first = randomNumber(1, 100);
  const second = randomNumber(1, 100);
  const question = `${first} ${second}`;
  const answer = String(calculateDevisor(first, second));
  return [question, answer];
};

export const braingcd = () => launch(calculateValues, gameInfo);
