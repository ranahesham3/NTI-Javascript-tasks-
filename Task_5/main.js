const btn = document.querySelector('button');
const display = document.getElementById('display');

btn.addEventListener('click', () => {
    let eventNameInput = document.getElementById('eventName');
    let eventDurationInput = document.getElementById('eventDuration');

    let eventName = eventNameInput.value.trim();
    let eventDuration = eventDurationInput.value;

    if (eventName === '') {
        alert('Please provide the event name');
        return;
    } else if (eventDuration <= 0) {
        alert('Please provide the event duration');
        return;
    }
    let id = 1;
    id = setInterval(() => {
        display.innerHTML = ``;
        display.innerHTML = `<h3>Countdown to ${eventName}!</h3>`;
        let sec = eventDuration % 60;
        let min = Math.floor(eventDuration / 60) % 60;
        let hr = Math.floor(eventDuration / 3600) % 60;
        display.innerHTML += `${hr} : ${min} : ${sec}`;
        eventDuration--;
        if (eventDuration < 0) {
            clearInterval(id);
            display.innerHTML = '';
            alert(`It's time for ${eventName} event!!`);
        }
    }, 1000);

    eventNameInput.value = '';
    eventDurationInput.value = '';
    return;
});
