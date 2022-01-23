/* ---------- Clock Script ---------- */

const secondClock = document.querySelector('.seconds');
const minClock = document.querySelector('.mins');
const hourClock = document.querySelector('.hours');

function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const secondClockDegrees = ((second / 60) * 360) + 90;
    secondClock.style.transform = `rotate(${secondClockDegrees}deg)`;

    const min = now.getMinutes();
    const minClockDegrees = ((min / 60) * 360) + 90;
    minClock.style.transform = `rotate(${minClockDegrees}deg)`;

    const hour = now.getHours();
    const hourClockDegrees = ((hour / 12) * 360) + 90;
    hourClock.style.transform = `rotate(${hourClockDegrees}deg)`;
}

setInterval(setDate, 1000);

/* ---------- Album Script ---------- */ 