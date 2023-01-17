//** === === ============ Cart Shopping */
const shoppingSection = document.querySelector(`#idShopping`);
const cartShopping = document.querySelector(`#shoppingCart`);
const label = document.getElementById(`label`);

//** === === ============ Events && Code Shopping Cart */
//**! === Basket Cart */
let basket = JSON.parse(localStorage.getItem(`data`)) || [];
console.log(basket);
