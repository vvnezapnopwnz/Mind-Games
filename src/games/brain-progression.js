import engine from '../index.js';

export const brainProgressionLogic = () => {
  const gameInfo = 'What number is missing in the progression?';
  const progressionLength = Math.floor(Math.random() * (11 - 5) + 5);
  const startPoint = Math.floor(Math.random() * (100 - 1) + 1);
  const progressionStep = Math.floor(Math.random() * 10);
  const randomArr = [];
  for (let j = startPoint; randomArr.length < progressionLength; j += progressionStep) {
    randomArr.push(j);
  }
  const points = randomArr.length - Math.floor(Math.random() * ((randomArr.length - 1) - 0) + 0);
  randomArr[points] = '..';
  const progressionQuestion = randomArr.join(' ');
  const trueAnswer = randomArr[points - 1] + progressionStep;

  return [progressionQuestion, trueAnswer, gameInfo];
};

export const brainProgression = () => engine(brainProgressionLogic);
