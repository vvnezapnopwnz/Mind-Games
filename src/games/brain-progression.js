import engine from '../index.js';
import randomNumber from '../utilities.js';

const gameInfo = 'What number is missing in the progression?';

const createProgression = (start, length, step) => {
  const progressionArray = [];
  for (let i = start; progressionArray.length < length; i += step) {
    progressionArray.push(i);
  }
  return progressionArray;
};

const getHiddenProgression = (start, length, step, getRandom) => {
  const hiddenProgression = createProgression(start, length, step);
  const points = getRandom;
  hiddenProgression[points] = '..';
  return hiddenProgression.join(' ');
};

export const calcValues = () => {
  const length = randomNumber(11, 5);
  const start = randomNumber(100, 1);
  const step = randomNumber(11, 1);
  const getRandom = length - randomNumber(length, 0);

  const progressionQuestion = getHiddenProgression(start, length, step, getRandom);
  const trueAnswer = String(start + step * getRandom);
  return [progressionQuestion, trueAnswer];
};

export const brainProgression = () => engine(calcValues, gameInfo);
