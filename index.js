//**TODO === ====================  ===  Shopping Cart === ===========================  === */
const btnMenu = document.querySelector(`#idBtnMenu`);
const navMobile = document.querySelector(`#navMobile`);
//** === Events */

btnMenu.addEventListener(`click`, () => {
  console.log('Click');

  if (navMobile) {
    navMobile.classList.toggle('hidden');
  }
});
