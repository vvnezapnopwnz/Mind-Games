### Hexlet tests and linter status:
[![Actions Status](https://github.com/vvnezapnopwnz/backend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/vvnezapnopwnz/backend-project-lvl1/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/codeclimate/codeclimate/maintainability)
## Mind Games
Mind Games is a set of five console games, built on the principle of popular mobile brain training applications. Each game asks questions that need to be answered correctly. After three correct answers, the game is considered to be completed. Wrong answers end the game and offer to play it again.
### Usage
The first step is to make sure you have the latest version of Node.js installed.
```bash
node -v
```
Install the dependencies in the local node_modules folder.
```bash
npm install
```
Add executable permissions to bin/<game name>.js by running 
```bash
chmod + x bin/<game name>.js 
```
in the root directory of the project. This will allow you to run the executable file directly from the console without specifying the interpreter (node). **The list of game names is presented below.**

Use the npm link command. It must be run from the root directory of the project.
```bash
npm link
```

Use command line to launch the selected game.
##### Calculator
Arithmetic expressions to be evaluated.
```bash
brain-calc
```
[![asciicast](https://asciinema.org/a/Caw5igWsF5Rsy2StPI25t9cgU.svg)](https://asciinema.org/a/Caw5igWsF5Rsy2StPI25t9cgU)
##### Definition of an even number
Determine if the number is even.
```bash
brain-even
```
[![asciicast](https://asciinema.org/a/bt3ekAhdF7W98eMoJhESalccC.svg)](https://asciinema.org/a/bt3ekAhdF7W98eMoJhESalccC)
##### The greatest common divisor
Determination of the greatest common divisor.
```bash
brain-gcd
```
[![asciicast](https://asciinema.org/a/bSYVsMStj6Wcln4nC8MKsJGUA.svg)](https://asciinema.org/a/bSYVsMStj6Wcln4nC8MKsJGUA)
##### Progression
Finds missing numbers in a sequence of numbers.
```bash
brain-progression
```
[![asciicast](https://asciinema.org/a/Pev2Bgu27mZhcv6Rp3RzeMp8m.svg)](https://asciinema.org/a/Pev2Bgu27mZhcv6Rp3RzeMp8m)
##### Prime number
Definition of a prime number.
```bash
brain-prime
```
[![asciicast](https://asciinema.org/a/ubBsnfwM3CAVBCzbpFhH6Ydev.svg)](https://asciinema.org/a/ubBsnfwM3CAVBCzbpFhH6Ydev)