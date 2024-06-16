
let time = document.getElementById('time');

setInterval(function showTime() {

    const date = new Date();

    const hoursNow = date.getHours();

    const minutesNow = date.getMinutes();

    const secondsNow = date.getSeconds();

    time.textContent = `${hoursNow.toString().padStart(2, '0')}:${minutesNow.toString().padStart(2, '0')}:${secondsNow.toString().padStart(2, '0')} ${isMorning === true ? "AM" : "PM"} EST`;

    console.log(hoursNow, ':', minutesNow, ':', secondsNow, isMorning === true ? "AM" : "PM");

}, 1000);


let isMorning = true;

if (this.hoursNow > 12 && isMorning) {
    hoursNow -= hoursNow - 12;
}