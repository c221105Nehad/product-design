const cursorAnimation = () => {

    let cursor = document.getElementById('cursor');

    document.querySelector('body').addEventListener('mousemove', function (event) {

        let x = event.clientX;
        let y = event.clientY;

        gsap.to(cursor, {
            x: x,
            y: y,
        });
    });

    document.querySelector('div').addEventListener('mouseover', function () {
        cursor.classList.remove('bg-slate-100');
        cursor.classList.add('backdrop-invert');
    });
}

cursorAnimation();

let time = document.getElementById('time');

setInterval(function showTime() {

    const date = new Date();

    const hoursNow = date.getHours();

    const minutesNow = date.getMinutes();

    const secondsNow = date.getSeconds();

    time.textContent = `${hoursNow.toString().padStart(2, '0')}:${minutesNow.toString().padStart(2, '0')}:${secondsNow.toString().padStart(2, '0')} ${isMorning === true ? "AM" : "PM"} EST`;

    // console.log(hoursNow, ':', minutesNow, ':', secondsNow, isMorning === true ? "AM" : "PM");

}, 1000);

let isMorning;

if (this.hoursNow > 12) {
    hoursNow -= hoursNow - 12;
    isMorning = true;
}