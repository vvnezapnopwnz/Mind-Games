import engine from "../index.js";


export const brainCalculatorLogic = () => {
  const gameInfo ='Whats is the result of the expression?';
  let question = '';
  let trueAnswer = 0;
  for (let i = 0; i < 3; i += 1) {
    const firstRandomNumber = Math.floor(Math.random() * 100);
    const secondRandomNumber = Math.floor(Math.random() * 100);
    const randomOperator = Math.floor(Math.random() * 10);
    if (randomOperator < 3) {
      question = `${firstRandomNumber} + ${secondRandomNumber}`;
      trueAnswer = firstRandomNumber + secondRandomNumber;
    } else if (randomOperator < 6) {
      question = `${firstRandomNumber} - ${secondRandomNumber}`;
      trueAnswer = firstRandomNumber - secondRandomNumber;
    } else {
      question = `${firstRandomNumber} * ${secondRandomNumber}`;
      trueAnswer = firstRandomNumber * secondRandomNumber;
    }
  }
  return [question, trueAnswer, gameInfo]
};
export const brainCalculator = () => engine(brainCalculatorLogic)
export default brainCalculator;
