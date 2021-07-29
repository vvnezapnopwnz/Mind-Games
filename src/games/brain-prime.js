import engine from '../index.js';

export const brainPrimeLogic = () => {
  const gameInfo = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    const randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
    let count = 0;
    for (let j = 0; j < randomNumber; j += 1) {
      if (randomNumber % j === 0) {
        count += 1;
      }
    }
    const isPrime = count > 1 ? 'no' : 'yes';

    return [randomNumber, isPrime, gameInfo]
  }

export const brainPrime = () => engine(brainPrimeLogic)
export default brainPrime;