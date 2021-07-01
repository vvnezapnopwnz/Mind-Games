import readlineSync from 'readline-sync';

const brainCalculator = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
  console.log('Whats is the result of the expression?');
  let question = 0;
// const operators = ['*', '+','-','/'];
// const max = 4
// const min = 0
// function getRandomOperator (min,max)  {
//   return operators[Math.floor(Math.random() * (max - min) + min)]
// }
// return firstRandomNumber + getRandomOperator(min,max) + secondRandomNumber
for (let i = 0;i < 3;i++) {
    const firstRandomNumber = Math.floor(Math.random() * 100);
  const secondRandomNumber = Math.floor(Math.random() * 100);
  let randomOperator = Math.floor(Math.random())
  if (randomOperator < 3) {
    console.log(`Question: ${firstRandomNumber} + ${secondRandomNumber}`)
    let answer = readlineSync.question('Your answer: ')
    question = firstRandomNumber + secondRandomNumber
        if(answer == question) {
          console.log('correct')
        } else {
          return `${answer} is wrong answer ;(. Correct answer was '${question}'`
        } 
  } else if (randomOperator < 6) {
    console.log(`Question: ${firstRandomNumber} - ${secondRandomNumber}`)
    let answer = readlineSync.question('Your answer: ')
    question = firstRandomNumber - secondRandomNumber
        if(answer == question) {
          console.log('correct')
        } else {
          return `${answer} is wrong answer ;(. Correct answer was '${question}'`
        } 
  } else {
    console.log(`Question: ${firstRandomNumber} * ${secondRandomNumber}`)
    let answer = readlineSync.question('Your answer: ')
    question = firstRandomNumber * secondRandomNumber
        if(answer == question) {
          console.log('correct')
        } else {
          return `${answer} is wrong answer ;(. Correct answer was '${question}'`
        } 
  }

    return   console.log(`Congratulations, ${name}!`);
}



return console.log(question)

}

brainCalculator()