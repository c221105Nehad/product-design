
// ------------------------------------------------------------------------------------------
// Locomotive for smooth scrolling

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// ------------------------------------------------------------------------------------------
// Cursor animation

const cursorAnimation = () => {

    let cursor = document.querySelector('#cursor');

    window.addEventListener('mousemove', function (event) {

        let x = event.clientX;
        let y = event.clientY;

        gsap.to(cursor, {
            x: x,
            y: y,
        });
    });

    document.querySelectorAll('#hero-section a, #about-section a, #subfooter-section a, #footer-section a').forEach(heroLink => {
        heroLink.addEventListener('mouseover', function () {
            gsap.to(cursor, {
                height: '20px',
                width: '20px',
            });
        });

        heroLink.addEventListener('mouseout', function () {
            gsap.to(cursor, {
                height: '15px',
                width: '15px',
            });
        });
    });

    document.querySelector('div').addEventListener('mouseover', function () {
        cursor.classList.remove('bg-slate-100');
        cursor.classList.add('backdrop-invert');
    });
};

document.addEventListener('DOMContentLoaded', cursorAnimation);

// ------------------------------------------------------------------------------------------
// Hero section animation

const heroSectionLoadingIntro = () => {

    let tl3 = gsap.timeline();

    tl3.to(document.querySelectorAll('#hero-heading h1'), {
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
        });
};

heroSectionLoadingIntro();

const navbarAnimation = () => {

    gsap.from(document.querySelector('#hero-section #nav'), {
        delay: 0.5,
        y: -50,
        opacity: 0,
        duration: 1.2
    });

    let tl1 = gsap.timeline();

    document.querySelector('#menu-open').addEventListener('click', function () {

        tl1.to(document.querySelector('#menu-open'), {
            x: 120,
            duration: 5,
            opacity: 0,
            ease: "expo.out",
        })

            .to('#menu a', {
                y: 30,
                duration: 1,
                opacity: 1,
                stagger: 0.15,
                delay: -4.5,
                ease: "elastic.out(1,0.3)",
            });
    });

    let tl2 = gsap.timeline();

    document.querySelector('#menu-close').addEventListener('click', function () {

        tl2.to('#menu a', {
            y: -20,
            duration: 1,
            opacity: 0,
            stagger: 0.15,
            ease: "expo.out"
        })

            .to(document.querySelector('#menu-open'), {
                x: 0,
                duration: 1,
                opacity: 1,
                ease: "elastic.out(1,0.3)"
            });
    });


};

navbarAnimation();

const heroLinkAnimation = () => {

    document.querySelectorAll('#hero-footer a').forEach(heroLink => {
        heroLink.addEventListener('mouseover', function () {

            heroLink.style.transform = 'rotateY(30deg)';

            gsap.to(this.querySelector('i'), {
                rotate: '0',
                duration: 0.3
            });
        });

        heroLink.addEventListener('mouseleave', function () {

            heroLink.style.transform = 'rotateY(0deg)';

            gsap.to(this.querySelector('i'), {
                rotate: '-45deg',
                duration: 0.3
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', heroLinkAnimation);

const heroFooterIconAnimation = () => {

    document.querySelectorAll('#hero-icons i').forEach(heroIcon => {
        heroIcon.addEventListener('mouseover', function () {

            console.log('mouse entered');
            heroIcon.style.transform = 'scale(3)';
        });

        heroIcon.addEventListener('mouseleave', function () {

            console.log('mouse leave');
            heroIcon.style.transform = 'scale(1)';
        });
    });
}


// document.addEventListener('DOMContentLoaded', heroFooterIconAnimation);


const subFooterLinkAnimation = () => {

    // let subFooterLink = document.querySelector('#subfooter-section  a');

    document.querySelectorAll('#subfooter-section a').forEach(subFooterLink => {
        subFooterLink.addEventListener('mouseover', function () {

            subFooterLink.style.transform = 'rotateY(30deg)';

            gsap.to(this.querySelector('i'), {
                rotate: '0',
                duration: 0.3
            });
        });

        subFooterLink.addEventListener('mouseleave', function () {

            subFooterLink.style.transform = 'rotateY(0deg)';

            gsap.to(this.querySelector('i'), {
                rotate: '-45deg',
                duration: 0.3
            });
        });
    });

};

subFooterLinkAnimation();

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

    // console.log(hoursNow, ':', minutesNow, ':', secondsNow, isMorning ? "AM" : "PM");
}

setInterval(showTime, 1000);

showTime();