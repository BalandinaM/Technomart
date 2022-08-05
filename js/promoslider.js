let controlsLeft = document.querySelector('.slider__controls_left');
let controlsRight = document.querySelector('.slider__controls_right');
let sliderContents = document.querySelectorAll ('.slider__content');


controlsRight.onclick = function () {
  for (let sliderContent of sliderContents) {
    sliderContent.classList.toggle('current');
  }
};

controlsLeft.onclick = function () {
  for (let sliderContent of sliderContents) {
    sliderContent.classList.toggle('current');
  }
};




