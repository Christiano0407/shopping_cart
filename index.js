//**TODO === ====================  ===  Shopping Cart === ===========================  === */
const btnMenu = document.querySelector(`#idBtnMenu`);
const navMobile = document.querySelector(`#navMobile`);
//**! === Add Shopping Cart */
const btnShop = document.querySelector(`#idBtnShop`);
const cardAmount = document.querySelector(`.card-amount`);
const quantity = document.querySelector(`.quantity`);
const btnMinus = document.querySelector(`.btn-minus`);
const btnPlus = document.querySelector(`btn-plus`);
//**! === Add Card With Template Literals */
let cardShop = document.getElementById(`cardShop`);
let clothesShopData = [
  {
    id: 1,
    name: `T-Shirt Men`,
    price: 500,
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Veritatis vero sapiente dignissimos libero nihil commodi
            explicabo.`,
    img: `/src/img/shirtImg/shirt.jpg`,
  },
  {
    id: 2,
    name: `T-Shirt Edition Special`,
    price: 350,
    text: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Veritatis vero sapiente dignissimos libero nihil commodi
            explicabo.`,
    img: `/src/img/shirtImg/shirt1.jpg`,
  },
  {
    id: 3,
    name: `T-Shirt White Snow`,
    price: 250,
    text: `    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Veritatis vero sapiente dignissimos libero nihil commodi
            explicabo.`,
    img: `/src/img/shirtImg/shirt2.jpg`,
  },
  {
    id: 4,
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
btnMenu.addEventListener(`click`, () => {
  //console.log('menu');

  if (navMobile) {
    navMobile.classList.toggle('hidden');
  }
});

btnShop.addEventListener(`click`, () => {
  console.log('Shop Card');
});

const generateShop = () => {
  return (cardShop.innerHTML = clothesShopData
    .map((item) => {
      return `
     <div class="card">
        <div class="card-title">
          <h1 class="card-tittle__clothes">Clothes New Shirt</h1>
        </div>

        <div class="card-img">
          <figure class="card-img__figure">
            <img
              class="card-img__image"
              src="${item.img}"
              alt="shirt-img"
            />
          </figure>
        </div>
        <div class="card-content">
          <h2 class="card-content__title">${item.name}</h2>
          <p class="card-content__text">
            ${item.text}
          </p>
        </div>
        <div class="card-plus">
          <span class="card-plus__cash">${item.price}</span>
          <div class="card-plus__more">
            <button class="btn-minus">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span id="idQuantity" class="quantity">0</span>
            <button class="btn-plus">
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
