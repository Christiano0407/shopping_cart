//**TODO === ====================  ===  Shopping Cart === ===========================  === */
const btnMenu = document.querySelector(`#idBtnMenu`);
const navMobile = document.querySelector(`#navMobile`);
//**! === Add Shopping Cart */
const btnShop = document.querySelector(`#idBtnShop`);
const cardAmount = document.querySelector(`.card-amount`);
const quantity = document.querySelector(`.quantity`);
const btnMinus = document.querySelector(`.btn-minus`);
const btnPlus = document.querySelector(`btn-plus`);

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
