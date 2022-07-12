let modalMap = document.querySelector('.modal-map');
let closeButtonMap = modalMap.querySelector('.modal__button_close');
let imgMap = document.querySelector('.contacts__map');

imgMap.onclick = function () {
  modalMap.classList.add('active');
}

closeButtonMap.onclick = function () {
  modalMap.classList.remove('active');
}
