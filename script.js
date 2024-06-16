const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const cursorAnimation = () => {

    let cursor = document.getElementById('cursor');
    let h1Tags = document.querySelectorAll('h1');
    let h3Tags = document.querySelectorAll('h3');
    let h5Tags = document.querySelectorAll('h5');
    let aTags = document.querySelectorAll('a');
    let pTags = document.querySelectorAll('p');
    let iTags = document.querySelectorAll('i');

    window.addEventListener('mousemove', function (event) {

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


    h1Tags.forEach(h1Tag => {
        h1Tag.addEventListener('mouseenter', function () {
            cursor.style.transform = 'scale(2)';
        });

        h1Tag.addEventListener('mouseleave', function () {
            cursor.style.transform = 'scale(1)';
        })
    });
}

cursorAnimation();

let time = document.getElementById('time');

function showTime() {
    let date = new Date();

    let hoursNow = date.getHours();
    let minutesNow = date.getMinutes();
    let secondsNow = date.getSeconds();

    let isMorning = hoursNow < 12;

    if (hoursNow > 12) {
        hoursNow = hoursNow - 12;
    } else if (hoursNow === 0) {
        hoursNow = 12;
    }

    time.textContent = `${hoursNow.toString().padStart(2, '0')}:${minutesNow.toString().padStart(2, '0')}:${secondsNow.toString().padStart(2, '0')} ${isMorning ? "AM" : "PM"} EST`;

    console.log(hoursNow, ':', minutesNow, ':', secondsNow, isMorning ? "AM" : "PM");
}

setInterval(showTime, 1000);

showTime();

function navbarAnimation() {
    gsap.from(document.querySelector('#hero-section nav'), {
        delay: 0.5,
        y: -50,
        opacity: 0,
        duration: 1.2
    });
}

navbarAnimation();

const tl = gsap.timeline();

tl.to(document.querySelectorAll('#hero-heading h1'), {
    delay: 0.7,
    y: 0,
    duration: 1,
    stagger: 0.2
})
    .to(document.querySelector('#hero-heading h5'), {
        y: 0,
        delay: -0.5
    })
    .to(document.querySelectorAll('#hero-meeting h3'), {
        y: 0,
        delay: -0.2,
        stagger: 0.2
    })
    .from(document.querySelector('#hero-footer'), {
        opacity: 0,
        delay: -0.1,
        stagger: 0.2
    })
