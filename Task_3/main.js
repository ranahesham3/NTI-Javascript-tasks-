let temp = prompt('What is the current temperature?');

let condition =
    temp < 0
        ? 'Freezing cold'
        : temp <= 15
        ? 'Cold'
        : temp <= 25
        ? 'Mild'
        : temp <= 35
        ? 'Warm'
        : 'Hot';

let safety =
    temp >= -5 && temp <= 40 ? 'Safe temperature' : 'Dangerous temperature';

let advice =
    temp >= 16 && temp <= 25
        ? 'Perfect for outdoor activities!'
        : temp > 30
        ? 'Stay hydrated!'
        : 'Stay safe';

let result = `Current temperature is: ${temp}\nWeather condition: ${condition}\n${safety} ,${advice}`;

document.getElementById('result').innerText = result;
console.log(result);
alert(advice);
