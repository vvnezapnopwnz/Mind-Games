import readlineSync from 'readline-sync';
import welcomeUser from './cli.js';

const engine = (game) => {
  const name = welcomeUser();
  const gameInfo = game()[2];
  console.log(gameInfo);

  for (let i = 0; i < 3; i += 1) {
    const [question, trueAnswer] = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default engine;
