import engine from '../index.js';
import randomNumber from '../utilities.js';

const gameInfo = 'What number is missing in the progression?';

const getHiddenProgression = (progressionData, hiddenIndex) => {
  const points = '..';
  const progression = progressionData;
  progression[hiddenIndex] = points;
  return progression.join(' ');
};

export const calculateValues = () => {
  const length = randomNumber(5, 11);
  const start = randomNumber(1, 100);
  const step = randomNumber(1, 11);
  const progressionData = [];
  for (let i = start; progressionData.length < length; i += step) {
    progressionData.push(i);
  }
  const hiddenIndex = length - randomNumber(0, length);

  const question = getHiddenProgression(progressionData, hiddenIndex);
  const answer = String(start + step * hiddenIndex);
  return [question, answer];
};

export const brainProgression = () => engine(calculateValues, gameInfo);
