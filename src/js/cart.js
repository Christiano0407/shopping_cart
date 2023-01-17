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
             <h4 class="cart-details__title">${searchBuy.name}</h4>
                <div class="cart-details__div" >
                    <p class="cart-details__price">${searchBuy.price}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
             <div class="cart-details__btn"></div>
           </div>
        </div>
     `;
      })
      .join(''));
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
