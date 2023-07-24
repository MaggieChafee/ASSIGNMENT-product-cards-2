const flowers = [
  {
   id: 1,
   title: "Tulips",
   image: "https://media.istockphoto.com/id/1348359587/photo/amazing-garden-field-with-tulips-of-various-bright-rainbow-color-petals-beautiful-bouquet-of.jpg?s=612x612&w=0&k=20&c=zLlZMsfI1uGtgdTtzENbdrv0hQqLLhE-getMnttt8ts=",
   desc: '"Life isn\'t a tiptoe through the tulips." - Shannon Hoon',
   avail: "Available",
   size: "Varies",
   weight: "Varies",
   val: "Offer valid until July 31, 2023",
   price1: "3 for $5",
   price2: "6 for $9",
   price3: "9 for $12",
  },
  {
    id: 2,
    title: "Orchids",
    image: "https://www.allaboutgardening.com/wp-content/uploads/2022/12/Purple-and-white-orchid-flowers-in-full-bloom-in-greenhouse.jpg",
    desc: '"Orchids are like people, each one unique and special in their own way." - Anonymous',
    avail: "Available",
    size: "Varies",
    weight: "About 1 lb",
    val: "Offer valid until July 31, 2023",
    price1: "1 for $5",
    price2: "2 for $10",
    price3: "3 for $15",
   },
   {
    id: 3,
    title: "Roses",
    image: "https://rosefarmers.com/cdn/shop/products/Buildabouquet_2_a01763b7-56df-4670-b3a4-cc02ce196220_500x500.jpg?v=1677087337",
    desc: '“Of all flowers, methinks a rose is best.” – William Shakespeare',
    avail: "Not Available",
    size: "Varies",
    weight: "Varies",
    val: "Offer valid until July 31, 2023",
    price1: "3 for $4",
    price2: "6 for $7",
    price3: "9 for $10",
   },
   {
   id: 4,
   title: "Daisies",
   image: "https://cdn.britannica.com/36/82536-050-7E968918/Shasta-daisies.jpg",
   desc: '"Don\'t you think daisies are the friendliest flower?" - You\'ve Got Mail',
   avail: "Available",
   size: "Varies",
   weight: "Varies",
   val: "Offer valid until July 31, 2023",
   price1: "Small Bundle for $5",
   price2: "Medium Bundle for $9",
   price3: "Large for $12",
   }, 
   {
    id: 5,
    title: "Sunflowers",
    image: "https://hosstools.com/wp-content/uploads/2020/10/black-oil-sunflower.jpg",
    desc: '"Then you\'re left in the dust, Unless I stuck by ya, You\'re the sunflower, I think your love would be too much" - Post Malone and Swae Lee',
    avail: "Not Available",
    size: "Large",
    weight: "Varies",
    val: "Offer valid until July 31, 2023",
    price1: "3 for $7",
    price2: "6 for $11",
    price3: "9 for $15",
    }, 
   {
    id: 6,
    title: "Irises",
    image: "https://media.istockphoto.com/id/522740304/photo/purple-iris-flowers.jpg?s=612x612&w=0&k=20&c=GJbD239Q0M9NLsvzI6bDYzBmhsxLUnA8TLXmcnjN9hk=",
    desc: '"And I don\'t want the world to see me Cause I don\'t think that they\'d understand When everything\'s made to be broken I just want you to know who I am" - Goo Goo Dolls',
    avail: "Available",
    size: "Varies",
    weight: "Varies",
    val: "Offer valid until July 31, 2023",
    price1: "3 for $10",
    price2: "6 for $15",
    price3: "9 for $18",
    }, 
]

  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };
  
  const cardsOnDom = (array) => {
    let domString = "";
    for (const flower of array) {
      domString += `<div class="card-body" style="width: 18rem;">
      <header>
        <h2>${flower.title}</h2>
      </header>
      <section>
        <img src="${flower.image}" class="card-img-top" alt="...">
        <p class="prod-descr">${flower.desc}</p>
        <h4 class="prod-avail">${flower.avail}</h4>
      </section>
      <div id="specs">
        <h3>Specifications</h3>
        <p class="prod-size">Size: ${flower.size}</p>
        <p class="prod-weight">Weight: ${flower.weight}</p>
        <footer class="prod-inv">${flower.val}</footer>
      </div>
      <div id="price">
        <h3 class="prod-price">Pricing</h3>
        <p class="prod-price-1">${flower.price1}</p>
        <p class="prod-price-2">${flower.price2}</p>
        <p class="prod-price-3">${flower.price3}</p>
      </div>
      </div>`;
  }
  renderToDom("#prodcards",domString);
  }
  
  cardsOnDom(flowers)
