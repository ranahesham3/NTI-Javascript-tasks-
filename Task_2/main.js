//Gather Employee Data
let name = prompt('What is your name?');
let age = prompt('What is your age?');
let yearsOfExperience = prompt('Are is your years of experience?');
let baseSalary = prompt('What is your current salary?');
let selfRate = prompt('Rate yourself from 1 to 10');

//Determine Job Category & calculate salary:
let jobCategory,
    bonus = 0;

if (yearsOfExperience < 2) {
    jobCategory = 'junior';
    bonus = 10;
} else if (yearsOfExperience < 5) {
    jobCategory = 'Mid-Level';
    bonus = 15;
} else if (yearsOfExperience < 10) {
    jobCategory = 'Senior';
    bonus = 20;
} else {
    jobCategory = 'Expert';
    bonus = 20;
}

let finalSalary = (baseSalary * (100 + bonus)) / 100;

//Check Performance Level
let rating;
switch (selfRate) {
    case 10:
    case 9:
        rating = 'Excellent';
        break;
    case 8:
    case 7:
        rating = 'Good';
        break;
    case 6:
    case 5:
        rating = 'Average';
        break;
    default:
        rating = 'Needs Improvement';
}

//Work Shift Time Calculation
let currentHour = new Date().getHours(); //starting from 0 to 23
let workShift;
if (currentHour >= 8 && currentHour <= 17) workShift = 'day shift';
else workShift = 'night shift';

//summary output
let report = `age: ${age}\nJob Category: ${jobCategory}\nPerformance Level: ${rating}\nWork shift: ${workShift}`;
let salaryResult = `Your final salary is : ${finalSalary}$`;

document.getElementById('userData').innerText = `${name}'s Information:`;
document.getElementById('report').innerText = report;
document.getElementById('salaryResult').innerText = salaryResult;

alert(salaryResult);

console.log(report);
console.log(salaryResult);
