let buttonGuarantee = document.getElementById("guarantee");
let buttonCredit = document.getElementById("credit");
let buttonDelivery = document.getElementById("delivery");
let delivery = document.querySelector(".item_delivery");
let guarantee = document.querySelector(".item_guarantee");
let credit = document.querySelector(".item_credit");
let boxItems = document.querySelectorAll(".box__item");
let buttons = document.querySelectorAll(".box__control");


buttonGuarantee.onclick = function () {
  for (let button of buttons) {
    button.classList.remove("box__control-active");
  }
  buttonGuarantee.classList.add("box__control-active");
 for (let boxItem of boxItems) {
   boxItem.classList.remove("selected");
 }
 guarantee.classList.add("selected");
}

buttonCredit.onclick = function () {
  for (let button of buttons) {
    button.classList.remove("box__control-active");
  }
  buttonCredit.classList.add("box__control-active");
  for (let boxItem of boxItems) {
    boxItem.classList.remove("selected");
   }
  credit.classList.add("selected");
}

buttonDelivery.onclick = function () {
  for (let button of buttons) {
    button.classList.remove("box__control-active");
  }
  buttonDelivery.classList.add("box__control-active");
   for (let boxItem of boxItems) {
    boxItem.classList.remove("selected");
   }
   delivery.classList.add("selected");
}

