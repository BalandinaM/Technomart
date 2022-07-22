let inputDelivery = document.getElementById('delivery');
let inputGuarantee = document.getElementById('guarantee');
let inputCredit = document.getElementById('credit');
let delivery = document.querySelector('.item_delivery');
let guarantee = document.querySelector('.item_guarantee');
let credit = document.querySelector('.item_credit');
let boxItems = document.querySelectorAll('.box__item');


inputGuarantee.onclick = function () {
  for (let boxItem of boxItems) {
    boxItem.classList.remove('selected');
   }
  guarantee.classList.add('selected');

}

inputCredit.onclick = function () {
  for (let boxItem of boxItems) {
    boxItem.classList.remove('selected');
   }
  credit.classList.add('selected');
}

inputDelivery.onclick = function () {
   for (let boxItem of boxItems) {
    boxItem.classList.remove('selected');
   }
   delivery.classList.add('selected');
}

