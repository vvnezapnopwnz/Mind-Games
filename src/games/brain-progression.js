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

const getHiddenProgression = (progressionData, getRandom) => {
  const hiddenProgression = createProgression(...progressionData);
  const points = getRandom;
  hiddenProgression[points] = '..';
  return hiddenProgression.join(' ');
};

export const calculateValues = () => {
  const length = randomNumber(11, 5);
  const start = randomNumber(100, 1);
  const step = randomNumber(11, 1);
  const progressionData = [start, length, step];
  const getRandom = length - randomNumber(length, 0);

  const question = getHiddenProgression(progressionData, getRandom);
  const answer = String(start + step * getRandom);
  return [question, answer];
};

export const brainProgression = () => engine(calculateValues, gameInfo);
