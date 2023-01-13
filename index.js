//**TODO === ====================  ===  Shopping Cart === ===========================  === */
const btnMenu = document.querySelector(`#idBtnMenu`);
const navMobile = document.querySelector(`#navMobile`);
const cardAmount = document.querySelector(`.card-amount`);
const btnShop = document.querySelector(`#idBtnShop`);
//** === Events */

btnMenu.addEventListener(`click`, () => {
  console.log('menu');

  if (navMobile) {
    navMobile.classList.toggle('hidden');
  }
});

btnShop.addEventListener(`click`, () => {
  console.log('Shop Card');
});
