import readlineSync from 'readline-sync';


export const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
//возврат имени нужен в случае вывода поздравления
export default welcomeUser;
