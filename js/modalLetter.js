let modalFeedback = document.querySelector('.modal-feedback');
let contactsButton = document.querySelector('.contacts__button');
let closeButton = document.querySelector('.modal__button_close');
let inputName = document.getElementById['name'];
let inputEmail = document.getElementById['email'];
let inputText = document.getElementById['text'];
let modalForm = document.querySelector('.modal-form');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add('active');

  if (storage) {
    inputName.value = storage;
    inputEmail.focus();
  } if (storage)  {
    inputEmail.value = storage;
    inputText.focus();
  }

})

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove('active');
  modalFeedback.classList.remove("modal-error");
})

modalForm.addEventListener("submit", function (evt) {
  if (!inputName.value || !inputEmail.value || !inputText.value) {
    evt.preventDefault();
    modalFeedback.classList.add("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("name", inputName.value);
    localStorage.setItem("email", inputEmail.value);
    }
  }

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains('active')) {
      evt.preventDefault();
      modalFeedback.classList.remove('active');
      modalFeedback.classList.remove("modal-error");
    }
  }
});

