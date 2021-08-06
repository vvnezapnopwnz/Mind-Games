import launch from '../index.js';
import randomNumber from '../utilities.js';

const gameInfo = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  for (let i = 2; i < question - 1; i += 1) {
    if (question % i === 0 && question >= 2) {
      return false;
    }
  }
  return true;
};

export const getProps = () => {
  const question = randomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export const brainPrime = () => launch(getProps, gameInfo);
