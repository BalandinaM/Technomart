let modalMap = document.querySelector(".modal-map");
let closeButtonMap = modalMap.querySelector(".modal__button_close");
let imgMap = document.querySelector(".contacts__map");

imgMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("active");
});


closeButtonMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("active");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalMap.classList.contains("active")) {
      evt.preventDefault();
      modalMap.classList.remove("active");
    }
  }
});

