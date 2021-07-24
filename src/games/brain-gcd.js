import readlineSync from 'readline-sync';

export const braingcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const array = [];
    const randomNumber = () => Math.floor(Math.random() * 100);
    for (let k = 0; k < 2; k += 1) {
      array.push(randomNumber());
    }
    console.log(`Question: ${array[0]} ${array[1]}`);
    const playersAnswer = readlineSync.question('You answer: ');
    let commonDivisor = 1;
    for (let j = 1; j < array[0] + array[1]; j += 1) {
      if (array[0] % j === 0 && array[1] % j === 0) {
        commonDivisor = j;
      }
    }
    if (Number(playersAnswer) === commonDivisor) {
      console.log('Correct!');
    } else {
      return console.log(`'${playersAnswer}' is wrong answer ;(. Correct answer was '${commonDivisor}'.\nLet's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
};

export default braingcd;
