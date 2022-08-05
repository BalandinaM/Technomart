let buttonsBuy = document.querySelectorAll(".products__button_buy");
let modalCart = document.querySelector(".popup-cart");
let closeCart = document.querySelector(".popup-cart__button_close")

for (let buttonBuy of buttonsBuy) {
  buttonBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCart.classList.add("popup-cart_visible");
  });
}

closeCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCart.classList.remove("popup-cart_visible");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalCart.classList.contains("popup-cart_visible")) {
      evt.preventDefault();
      modalCart.classList.remove("popup-cart_visible");
    }
  }
});
