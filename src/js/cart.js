//** === === ============ Cart Shopping */

//import { clothesShopData } from './data.js';

const cardAmount = document.querySelector(`#idAmount`);
const btnCheckout = document.getElementById(`btnCheckout`);
const btnClear = document.getElementById(`btnClear`);
const shoppingSection = document.querySelector(`#idShopping`);
const cartShopping = document.querySelector(`#shoppingCart`);
const label = document.getElementById(`label`);
const totalPlus = document.getElementById(`idTotalPlus`);
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
                    <p class="cart-details__price">$${searchBuy.price}</p>
                    <button onclick="remove(${id})" class="btn-delete" >
                       <i class="fa-solid fa-x"></i>
                    </button>
                </div>
              <div class="quantity" id="${id}"><span>Product: ${
          item * searchBuy.price
        }</span></div>
             <div class="cart-details__btn">
                <button class="btn btn-cartBuy">Buy</button>
             </div>
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

/* const decrement = (id) => {
  let selectedID = id;
  //console.log(selectedID);

  let search = basket.find((item) => item.id === selectedID);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  // === Enter Local Storage
  basket = basket.filter((element) => element.item !== 0);
  localStorage.setItem('data', JSON.stringify(basket));
};
 */
const remove = (id) => {
  let selectedRemove = id;
  console.log(selectedRemove);
};
//**! === Total Pay */
const totalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((element) => {
        let { item, id } = element;
        let search = clothesShopData.find((product) => product.id === id || []);
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    //console.log(amount);
    totalPlus.innerHTML = amount;
  } else return;
};

//**! === Checkout &&  Clear && Remove === ====  Finished ==== */
btnCheckout.addEventListener(`click`, () => {
  totalAmount();
});

btnClear.addEventListener('click', () => {
  console.log('Clear');
  //decrement();
  basket = [];
  generateCartItems();
  localStorage.setItem('data', JSON.stringify(basket));
});
