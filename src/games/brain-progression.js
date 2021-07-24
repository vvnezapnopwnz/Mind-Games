import readlineSync from 'readline-sync';

export const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let count = 0;
  for (let i = 0; count < 3; i += 1) {
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
    console.log(`Question: ${progressionQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === randomArr[points - 1] + progressionStep) {
      console.log('Correct!');
      count += 1;
    } else {
      return console.log(`'${answer}' is a wrong answer ;(. Correct answer was '${randomArr[points - 1] + progressionStep}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainProgression;
