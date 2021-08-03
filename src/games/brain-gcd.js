import engine from '../index.js';
import randomNumber from '../utilities.js';

const gameInfo = 'Find the greatest common divisor of given numbers.';

const calculateDevisor = (first, second) => {
  let devisor = 1;
  const calculationRange = first > second ? second : first;
  for (let i = 1; i < calculationRange; i += 1) {
    if (first % i === 0 && second % i === 0) {
      devisor = i;
    }
  }
  return devisor;
};

export const calculateValues = () => {
  const first = randomNumber(100, 1);
  const second = randomNumber(100, 1);
  const braingcdQuestion = `${first} ${second}`;
  const commonDivisor = String(calculateDevisor(first, second));
  return [braingcdQuestion, commonDivisor];
};

export const braingcd = () => engine(calculateValues, gameInfo);
