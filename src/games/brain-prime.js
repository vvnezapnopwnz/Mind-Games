import engine from '../index.js';
import randomNumber from '../utilities.js';

const gameInfo = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let result = true;
  for (let i = 2; i < num - 1; i += 1) {
    if (num % i === 0 && num >= 2) {
      result = false;
    }
  }
  return result;
};

export const calculateValues = () => {
  const num = randomNumber(100, 1);
  const trueAnswer = isPrime(num) ? 'yes' : 'no';
  return [num, trueAnswer];
};

export const brainPrime = () => engine(calculateValues, gameInfo);
