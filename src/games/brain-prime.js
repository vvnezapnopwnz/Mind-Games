import engine from '../index.js';
import randomNumber from './random-number.js';

const gameInfo = 'Answer "yes" if given number is prime. Otherwise answer "no".';


export const calculateValues = () => {
  const num = randomNumber();
  let count = 0;
  for (let j = 0; j < num; j += 1) {
    if (num % j === 0 && num !== 1) {
      count += 1;
    }
  }
  const isPrime = count > 1 ? 'no' : 'yes';
  return [num, isPrime];
};

export const brainPrime = () => engine(calculateValues, gameInfo);
