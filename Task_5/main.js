const events = [];

const addEventBtn = document.getElementById('addEvent');
const searchBtn = document.getElementById('search');
const display = document.getElementById('display');
const searchedEvents = document.getElementById('searchedEvents');

let addId = 1;
let searchId = 1;

addEventBtn.addEventListener('click', () => {
    let eventNameInput = document.getElementById('eventName');
    let eventDurationInput = document.getElementById('eventDuration');

    let eventName = eventNameInput.value.trim();
    let eventDuration = eventDurationInput.value;

    if (eventName === '') {
        alert('Please provide the event name');
        return;
    } else if (eventDuration === 0) {
        alert('Please provide the event duration');
        return;
    }
    const event = {
        name: eventName,
        duration: eventDuration,
        intervalId: null,
    };
    clearInterval(searchId);

    const eventDisplay = document.createElement('div');
    display.appendChild(eventDisplay);
    event.intervalId = events[events.length - 1];
    addId = setInterval(() => {
        eventDisplay.innerHTML = ``;
        eventDisplay.innerText += `Countdown to ${event.name}!\nTime Remaining: `;
        let sec = event.duration % 60;
        let min = Math.floor(event.duration / 60) % 60;
        let hr = Math.floor(event.duration / 3600) % 60;
        eventDisplay.innerText += `${hr} : ${min} : ${sec}\n`;
        event.duration--;
    }, 1000);
    setTimeout(() => {
        clearInterval(event.intervalId);
        eventDisplay.remove();
        eventDisplay.innerHTML = '';
        alert(`It's time for ${event.name} event!!`);
    }, eventDuration * 1000 + 1000);
    events.push(event);
    eventNameInput.value = '';
    eventDurationInput.value = '';
});

searchBtn.addEventListener('click', () => {
    let eventNameInput = document.getElementById('searchByName');

    let eventName = eventNameInput.value.trim();

    if (eventName === '') {
        alert('Please provide the event name you are searching for');
        return;
    }
    searchId = setInterval(() => {
        searchedEvents.innerText = ``;
        const filteredEvents = events.filter(
            (el) => el.name === eventName && el.duration >= 0
        );
        filteredEvents.forEach((el) => {
            searchedEvents.innerText += `Countdown to ${el.name}!\nTime Remaining: `;
            let sec = el.duration % 60;
            let min = Math.floor(el.duration / 60) % 60;
            let hr = Math.floor(el.duration / 3600) % 60;
            searchedEvents.innerText += `${hr} : ${min} : ${sec}\n`;
        });
        if (!filteredEvents.length) {
            clearInterval(searchId);
            searchedEvents.innerHTML = '';
        }
    }, 1000);

    eventNameInput.value = '';
});
