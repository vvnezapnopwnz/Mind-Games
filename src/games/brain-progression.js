import engine from '../index.js';

const gameInfo = 'What number is missing in the progression?';

const createArr = (x, y, p) => {
  const arr = [];
  for (let j = x; arr.length < y; j += p) {
    arr.push(j);
  }
  return arr;
};
export const calcValues = () => {
  const progressionLength = Math.floor(Math.random() * (11 - 5) + 5);
  const startPoint = Math.floor(Math.random() * (100 - 1) + 1);
  const progressionStep = Math.floor(Math.random() * 10);
  const x = createArr(startPoint, progressionLength, progressionStep);
  const points = x.length - Math.floor(Math.random() * ((x.length - 1) - 0) + 0);
  x[points] = '..';
  const progressionQuestion = x.join(' ');
  const trueAnswer = String(x[points - 1] + progressionStep);

  return [progressionQuestion, trueAnswer];
};

export const brainProgression = () => engine(calcValues, gameInfo);
