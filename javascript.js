// FULL SCreen slide show

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 10000); // Change every 10 seconds

// Transparent header--

const header = document.querySelector('.header');
const videoSection = document.querySelector('.defaultImg');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const videoSectionTop = videoSection.offsetTop + videoSection.offsetHeight;

    if (scrollPosition > videoSectionTop){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function animateNumber(el, startFrom, endAt, duration, onComplete) {
  const range = endAt - startFrom;
  const stepTime = Math.abs(Math.floor(duration / Math.abs(range)));
  let current = startFrom;

  const timer = setInterval(() => {
    el.textContent = current;
    if (current === endAt) {
      clearInterval(timer);
      if (onComplete) onComplete();
    }
    current += (range > 0 ? 1 : -1);
  }, stepTime);
}

function startAnimation(el, finalValue) {
  const downTo = -5;
  animateNumber(el, 0, downTo, 500, () => {
    animateNumber(el, downTo, finalValue, 1000);
  });
}

// Start animations for both counters
const numberElement = document.getElementById('number');
const number2Element = document.getElementById('number2');
const number3Element = document.getElementById('number3');
const number4Element = document.getElementById('number4');
startAnimation(numberElement, 21);
startAnimation(number2Element, 54);
startAnimation(number3Element, 30);
startAnimation(number4Element, 99);