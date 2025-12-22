// footer--part
let date = new Date(). getFullYear();
document.getElementById("year").innerHTML = date;

// carousel--part
const texts = document.querySelectorAll(".overview .Hadiths p");
const indicators = document.querySelectorAll(".indicators span");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = Math.floor(Math.random() * texts.length);

let autoplay;
const autoPlayDelay = 5000;
const ResumDelay = 5000;

function updateCarousel () {
  texts.forEach((text, i) => {
    text.classList.toggle("active", i === currentIndex);
    indicators[i].classList.toggle("active", i === currentIndex);
  });
}

function StartAutoPlay () {
  StopAutoPlay();
  autoplay = setInterval(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    updateCarousel();
  }, autoPlayDelay);
}

function StopAutoPlay () {
  clearInterval(autoplay);
}

function UserIneracted() {
  StopAutoPlay();
  setTimeout(StartAutoPlay, ResumDelay);
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % texts.length;
  updateCarousel();
  UserIneracted();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + texts.length) % texts.length;
  updateCarousel();
  UserIneracted();
});

indicators.forEach(indicator => {
  indicator.addEventListener('click', () => {
    currentIndex = parseInt(indicator.dataset.index);
    updateCarousel();
    UserIneracted();
  });
});

updateCarousel();
StartAutoPlay();