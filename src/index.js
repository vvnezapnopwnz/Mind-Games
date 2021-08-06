import readlineSync from 'readline-sync';

const roundsAmount = 3;

const launch = (game, gameInfo) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameInfo);

  for (let i = 0; i < roundsAmount; i += 1) {
    const [question, userAnswer] = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== userAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${userAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default launch;
