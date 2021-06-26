import readlineSync from 'readline-sync';
import { welcomeUser } from '../src/cli.js';


export const brainEven = ( name ) => {
    welcomeUser(name);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 100);
        console.log(`Question: ${randomNumber}`);
        let answer = readlineSync.question('Your answer: ');
        if (answer == 'yes' && randomNumber % 2 === 0) {
            console.log('Correct!');
        } else if (answer == 'no' && randomNumber % 2 >= 1) {
            console.log('Correct!');
        } else {
            return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
        };   
    };

    console.log(`Congratulations, ${name}!`);

    };

    export default brainEven;