import engine from '../index.js';

export const brainGcdLogic = () => {
  const gameInfo = 'Find the greatest common divisor of given numbers.';
  const array = [];
  const randomNumber = () => Math.floor(Math.random() * 100);
  for (let k = 0; k < 2; k += 1) {
    array.push(randomNumber());
  }
  const braingcdQuestion = `${array[0]} ${array[1]}`;
  let commonDivisor = 1;
  for (let j = 1; j < array[0] + array[1]; j += 1) {
    if (array[0] % j === 0 && array[1] % j === 0) {
      commonDivisor = j;
    }
  }
  commonDivisor = String(commonDivisor);
  return [braingcdQuestion, commonDivisor, gameInfo];
};

export const braingcd = () => engine(brainGcdLogic);
