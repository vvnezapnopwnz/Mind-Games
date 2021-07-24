import readlineSync from 'readline-sync';

export const brainPrime = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    let count = 0;
    for (let j = 0; j < randomNumber; j += 1) {
      if (randomNumber % j === 0) {
        count += 1;
      }
    }
    const isPrime = count > 1 ? 'no' : 'yes';
    if (count > 1 && String(answer) === 'no') {
      console.log('Correct!');
    } else if (count === 1 && String(answer) === 'yes') {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainPrime;
