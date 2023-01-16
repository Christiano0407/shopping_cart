//**TODO === ====================  === === === === ===  Shopping Cart === === === === ===========================  === */
const btnMenu = document.querySelector(`#idBtnMenu`);
const navMobile = document.querySelector(`#navMobile`);
//**! === Add Shopping Cart */
const btnShop = document.querySelector(`#idBtnShop`);
const cardAmount = document.querySelector(`.card-amount`);

//const btnMinus = document.querySelector(`.btn-minus`);
//const btnPlus = document.querySelector(`btn-plus`);
//**! === Add Card With Template Literals */
let cardShop = document.getElementById(`cardShop`);
let clothesShopData = [
  {
    id: `clothesOne`,
    name: `T-Shirt Men`,
    price: 500,
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Veritatis vero sapiente dignissimos libero nihil commodi
            explicabo.`,
    img: `/src/img/shirtImg/shirt.jpg`,
  },
  {
    id: `clothesTwo`,
    name: `T-Shirt Edition Special`,
    price: 350,
    text: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Veritatis vero sapiente dignissimos libero nihil commodi
            explicabo.`,
    img: `/src/img/shirtImg/shirt1.jpg`,
  },
  {
    id: `clothesThird`,
    name: `T-Shirt White Snow`,
    price: 250,
    text: `    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Veritatis vero sapiente dignissimos libero nihil commodi
            explicabo.`,
    img: `/src/img/shirtImg/shirt2.jpg`,
  },
  {
    id: `clothesFour`,
    name: `T-Shirt Special line`,
    price: 450,
    text: `    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Veritatis vero sapiente dignissimos libero nihil commodi
            explicabo.`,
    img: `/src/img/shirtImg/shirt4.jpg`,
  },
];

//** === Counter  */
let counter = 0;

//** ====  === Events === ==== */
//** === Menu */
btnMenu.addEventListener(`click`, () => {
  //console.log('menu');

  if (navMobile) {
    navMobile.classList.toggle('hidden');
  }
});
//** === Shop Card */
btnShop.addEventListener(`click`, () => {
  console.log('Shop Card');
});

//** === Basket */
let basket = [];
//console.log(basket);

//** === Shop && Custom Element */
const generateShop = () => {
  return (cardShop.innerHTML = clothesShopData
    .map((item) => {
      let { id, name, price, text, img } = item;
      return `
     <div id=cardProductId-${id}  class="card">
        <div class="card-title">
          <h1 class="card-tittle__clothes">Clothes New Shirt</h1>
        </div>

        <div class="card-img">
          <figure class="card-img__figure">
            <img
              class="card-img__image"
              src="${img}"
              alt="shirt-img"
            />
          </figure>
        </div>
        <div class="card-content">
          <h2 class="card-content__title">${name}</h2>
          <p class="card-content__text">
            ${text}
          </p>
        </div>
        <div class="card-plus">
          <span class="card-plus__cash">${item.price}</span>
          <div class="card-plus__more">
            <button onclick="decrement(${id})"  class="btn-minus">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span id=${id} class="quantity">0</span>
            <button onclick="increment(${id})"  class="btn-plus">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          <button class="btn btn-card">buy</button>
        </div>
    </div>`;
    })
    .join(''));
  // une todos los elementos de una matriz
};

generateShop();

//** === Increment or Decrement && Update  ===  */

const decrement = (id) => {
  let selectedID = id;
  //console.log(selectedID);

  let search = basket.find((item) => item.id === selectedID);

  if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  //console.log(basket);

  update(selectedID);
};

const increment = (id) => {
  //let selectedItem = id;
  //console.log(selectedItem.id);
  let selectedID = id;
  let search = basket.find((item) => item.id === selectedID);

  if (search === undefined) {
    basket.push({
      id: selectedID,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  //console.log(basket);
  update(selectedID);
};

let update = (id) => {
  let search = basket.find((item) => item.id === id);
  console.log(search.item);

  //document.getElementById(id).innerHTML = search.item;
  document.querySelector(`.quantity`).innerHTML = search.item;
};
