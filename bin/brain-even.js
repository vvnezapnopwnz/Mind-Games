#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { brainEven } from '../src/belogic.js';

const name = readlineSync.question('May I have your name? ');
brainEven(name);
