import engine from '../index.js';

export const brainEvenLogic = () => {
  const gameInfo = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomNumber = Math.floor(Math.random() * 100);
  const trueAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  return [randomNumber, trueAnswer, gameInfo];
};
export const brainEven = () => engine(brainEvenLogic);
