import engine from '../index.js';
import randomNumber from './random-number.js';

const gameInfo = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => (number > 1 ? 'no' : 'yes');
export const calculateValues = () => {
  const num = randomNumber();
  let count = 0;
  for (let j = 0; j < num; j += 1) {
    if (num % j === 0 || num !== 1) {
      count += 1;
    }
  }
  return [num, isPrime(count)];
};

export const brainPrime = () => engine(calculateValues, gameInfo);
