import readlineSync from 'readline-sync';

let name = '';
export const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default welcomeUser;
