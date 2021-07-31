import engine from '../index.js';
import randomNumber from './random-number.js';

const gameInfo = 'Find the greatest common divisor of given numbers.';

const calculateDevisor = (arr) => {
  let devisor = 1;
  for (let j = 1; j < arr[0] + arr[1]; j += 1) {
    if (arr[0] % j === 0 && arr[1] % j === 0) {
      devisor = j;
    }
  }
  return devisor;
};

export const calculateValues = () => {
  const array = [];
  for (let k = 0; k < 2; k += 1) {
    array.push(randomNumber());
  }
  const braingcdQuestion = `${array[0]} ${array[1]}`;
  const commonDivisor = String(calculateDevisor(array));
  return [braingcdQuestion, commonDivisor];
};

export const braingcd = () => engine(calculateValues, gameInfo);
