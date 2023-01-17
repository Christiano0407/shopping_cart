//** === === ============ Cart Shopping */

//import { clothesShopData } from './data.js';

const cardAmount = document.querySelector(`#idAmount`);
const btnCheckout = document.getElementById(`#btnClear`);
const btnClear = document.getElementById(`#btnClear`);
const shoppingSection = document.querySelector(`#idShopping`);
const cartShopping = document.querySelector(`#shoppingCart`);
const label = document.getElementById(`label`);

//console.log(clothesShopData);

//** === === ============ Events && Code Shopping Cart */
//**! === Basket Cart */
let basket = JSON.parse(localStorage.getItem(`data`)) || [];
//console.log(basket);

//** === Calculation  */
const calculation = () => {
  cardAmount.innerHTML = basket
    .map((element) => element.item)
    .reduce((x, y) => x + y, 0);
  // console.log(basket.map((items) => items.item));
};
calculation();

//**! === Cart Items && Create Custom Element AND add Product Cart */
const generateCartItems = () => {
  if (basket.length !== 0) {
    //console.log('Basket is not Empty');
    return (cartShopping.innerHTML = basket
      .map((item) => {
        //console.log(item);
        let = { id, item } = item;
        let searchBuy = clothesShopData.find(
          (product) => product.id === id || []
        );
        return `
        <div class="cart-itemBuy">
           <img src="${searchBuy.img}" alt="search-product" >
           <div class="cart-details">
             <div class="cart-details__title" >${searchBuy.name}</div>
             <div class="cart-details__btn"></div>
             <h3 class="cart-details__price">${searchBuy.price}</h3>
           </div>
        </div>
     `;
      })
      .join());
  } else {
    //console.log('Basket, not product...');
    cartShopping.innerHTML = ``;
    label.innerHTML = ` 
    <h2 class="label-text">Cart is Empty</h2>
      <a href="/index.html" class="Label-btn">
         <button class="btn-home">Back To Home</button>
      </a>
    `;
  }
};
generateCartItems();
