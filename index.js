const menu = [
  {
    name: "Buttermilk Pancakes",
    price: "$15.99",
    text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    id: "breakfast",
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
  },

  {
    name: "Diner Double",
    price: "$13.99",
    text: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    id: "lunch",
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
  },

  {
    name: "Godzilla Milkshake",
    price: "$6.99",
    text: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    id: "shakes",
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
  },

  {
    name: "Country Delight",
    price: "$20.99",
    text: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
    id: "breakfast",
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
  },

  {
    name: "Egg Attack",
    price: "$22.99",
    text: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    id: "lunch",
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
  },

  {
    name: "Oreo Dream",
    price: "$18.99",
    text: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    id: "shakes",
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
  },

  {
    name: "Bacon Overflow",
    price: "$8.99",
    text: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    id: "breakfast",
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
  },

  {
    name: "American Classic",
    price: "$12.99",
    text: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    id: "lunch",
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
  },

  {
    name: "Quarantine Buddy",
    price: "$16.99",
    text: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    id: "shakes",
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
  },

  {
    name: "Steak Dinner",
    price: "$39.99",
    text: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    id: "dinner",
    image:
      "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
  },
];

const grid = document.querySelector(".grid");
const menuName = document.querySelector(".name");
const price = document.querySelector(".price");
const text = document.querySelector(".text");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
});

const displayMenuItems = (items) => {
  grid.innerHTML = "";
  items.forEach((item) => {
    const menuCont = document.createElement("div");
    menuCont.className = "menu";
    menuCont.innerHTML = `<div><img src="${item.image}" /></div>

          <div class="flex-right">
            <div class="name-price">
              <p class="name">${item.name}</p>
              <p class="price">${item.price}</p>
            </div>
            <div class="dotted-line"></div>
            <p class="text">${item.text}</p>
          </div>`;
          grid.appendChild(menuCont);
  });
};

//Display all menu
const allBtn = document.querySelector(".all");
allBtn.addEventListener("click", ()=>{
  displayMenuItems(menu);
});

//Display breakfast menu
const breakfastBtn = document.querySelector(".breakfast");
breakfastBtn.addEventListener("click", ()=>{
  const breakfastFilter = menu.filter((breakfastItem) => breakfastItem.id === "breakfast");
  displayMenuItems(breakfastFilter);
});

//Display lunch menu
const lunchBtn = document.querySelector(".lunch");
lunchBtn.addEventListener("click", ()=>{
  const lunchFilter = menu.filter((lunchItem) => lunchItem.id === "lunch");
  displayMenuItems(lunchFilter);
});

//Display shakes menu
const shakesBtn = document.querySelector(".shakes");
shakesBtn.addEventListener("click", ()=>{
  const shakesFilter = menu.filter((shakesItem) => shakesItem.id === "shakes");
  displayMenuItems(shakesFilter);
});

//Display dinner menu
const dinnerBtn = document.querySelector(".dinner");
dinnerBtn.addEventListener("click", ()=>{
  const dinnerFilter = menu.filter((dinnerItem) => dinnerItem.id === "dinner");
  displayMenuItems(dinnerFilter);
});