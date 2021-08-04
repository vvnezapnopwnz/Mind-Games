import engine from '../index.js';
import randomNumber from '../utilities.js';

const gameInfo = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  let result = true;
  for (let i = 2; i < question - 1; i += 1) {
    if (question % i === 0 && question >= 2) {
      result = false;
    }
  }
  return result;
};

export const calculateValues = () => {
  const question = randomNumber(100, 1);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export const brainPrime = () => engine(calculateValues, gameInfo);
