let buttonsBuy = document.querySelectorAll('.products__button_buy');
let modalCart = document.querySelector('.popup-cart');
let articleContent = document.querySelector('.article__content');
let closeCart = document.querySelector('.popup-cart__button_close')

for (let buttonBuy of buttonsBuy) {
  buttonBuy.onclick = function () {
    modalCart.classList.add('popup-cart_visible');
    articleContent.style.visibility = 'visible';
  }
}

closeCart.onclick = function () {
  modalCart.classList.remove('popup-cart_visible');
}
