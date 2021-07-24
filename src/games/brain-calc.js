import readlineSync from 'readline-sync';

export const brainCalculator = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Whats is the result of the expression?');
  let question = 0;
  for (let i = 0; i < 3; i += 1) {
    const firstRandomNumber = Math.floor(Math.random() * 100);
    const secondRandomNumber = Math.floor(Math.random() * 100);
    const randomOperator = Math.floor(Math.random() * 10);
    if (randomOperator < 3) {
      console.log(`Question: ${firstRandomNumber} + ${secondRandomNumber}`);
      const answer = readlineSync.question('Your answer: ');
      question = firstRandomNumber + secondRandomNumber;
      if (Number(answer) === question) {
        console.log('Correct!');
      } else if (answer !== question) {
        return console.log(`${answer} is wrong answer ;(. Correct answer was '${question}'.\nLet's try again, ${name}!`);
      }
    } else if (randomOperator < 6) {
      console.log(`Question: ${firstRandomNumber} - ${secondRandomNumber}`);
      const answer = readlineSync.question('Your answer: ');
      question = firstRandomNumber - secondRandomNumber;
      if (Number(answer) === question) {
        console.log('Correct!');
      } else {
        return console.log(`${answer} is wrong answer ;(. Correct answer was '${question}'.\nLet's try again, ${name}!`);
      }
    } else {
      console.log(`Question: ${firstRandomNumber} * ${secondRandomNumber}`);
      const answer = readlineSync.question('Your answer: ');
      question = firstRandomNumber * secondRandomNumber;
      if (Number(answer) === question) {
        console.log('Correct!');
      } else {
        return console.log(`${answer} is wrong answer ;(. Correct answer was '${question}'.\nLet's try again, ${name}!`);
      }
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainCalculator;
