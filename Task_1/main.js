let name = prompt('What is your name?');
let birthYear = prompt('What is your birth year?');
let isStudent = confirm('Are you a student?');

let age = new Date().getFullYear() - birthYear;

let category;
if (age < 13) category = 'Kid';
else if (age <= 17) category = 'Teen';
else if (age <= 59) category = 'Adult';
else category = 'Senior';

//Show the output
let userData = `Hello ${name}, you're ${age} years old.\nCategory: ${category}`;
let studentStatment;
if (isStudent) studentStatment = `\nDon't forget to study hard!`;

console.log(userData + studentStatment);
document.getElementById('userData').innerText = userData + studentStatment;
alert(studentStatment);
