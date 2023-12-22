let days = document.querySelector('#days p');
let hours = document.querySelector('#hours p');
let minutes = document.querySelector('#minutes p');
let seconds = document.querySelector('#seconds p');

let countDownDate = new Date('4 January 2024').getTime();

let x = setInterval(function () {
    let now = new Date().getTime();
    let difference = countDownDate - now;

    let secsLeft = Math.floor(difference % (1000 * 60) / 1000);
    let minsLeft = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
    let hrsLeft = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));

    seconds.innerHTML = secsLeft;
    minutes.innerHTML = minsLeft;
    hours.innerHTML = hrsLeft;
    days.innerHTML = daysLeft;

    if (difference < 0) {
        clearInterval(x);
        seconds.innerHTML = '00';
        minutes.innerHTML = '00';
        hours.innerHTML = '00';
        days.innerHTML = '00';
    }
}, 1000)



