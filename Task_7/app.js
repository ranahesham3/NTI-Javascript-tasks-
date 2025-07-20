import { add, subtract, pi } from './modules/math.js';
import greet from './modules/greet.js';
import capitalize from './modules/utils.js';

const name = prompt('What is your name?', 'user');
console.log(greet(capitalize(name)));

const num1 = Number(prompt('Enter the first number:'));
const num2 = Number(prompt('Enter the second number:'));
const option = prompt(
    `for Addition enter 'Add',for subtraction enter 'Sub'`,
    'Add'
);

if (option === 'Add') console.log(add(num1, num2));
else console.log(subtract(num1, num2));

const radius = Number(prompt('Enter the raduis of the circle:'));

console.log(`The area of the circle is: ${radius * radius * pi}`);
