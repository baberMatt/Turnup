let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/turnup", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let eventSeed = [
  {
    eventName: "Ramen by Alex Hrvatin",
    eventString: "ramenbyalexhrvatin",
    attendees: [],
    briefDetails: "Handmade Noodles, Carefully Crafted Broth, Local Ingredients",
    details: "Come on down to the Fluffy Duck Cafe and get yourself a bowl of ramen by Alex. Noodles, hand made in house here, broth carefully simmered for hours, and garnishes of local meats and veggies all prepared fresh from the farmer's market.",
    eventType: "Pop Up",
    category: { first: "Food", second: "ramen" },
    location: "10001 Chester Ave, Cleveland, OH 44106"
  },
  {
    eventName: "Bocce Boys & Sons Pizza",
    eventString: "bocceboys&sonspizza",
    attendees: [],
    briefDetails: "Slinging pies straight outta Czechosloboccia",
    details: "We're making pies right out of my kitchen here at the Franklin Castle. Order through instagram (link attached) and pick up when we say",
    eventType: "Pop Up",
    category: { first: "Food", second: "pizza" },
    location: "4308 Franklin Blvd, Cleveland, OH 44113"
  },
  {
    eventName: "North Coast Que",
    eventString: "northcoastque",
    attendees: [],
    briefDetails: "Real pit barbecue here on the shores of Lake Erie",
    details: "We smoke it all! We got brisket, shoulders, hams, bacon, birds,you name it. Stop on by and grab a pile of your new favorite que. Seasonal rotating sides",
    eventType: "Pop Up",
    category: { first: "Food", second: "barbecue" },
    location: "6030 Middle Ridge Rd, Madison, OH 44057"
  },
  {
    eventName: "Sugar + Smoke Healing",
    eventString: "sugar+smokehealing",
    attendees: [],
    briefDetails: "For all your witchy needs...",
    details: "Herbal rituals, soy candles, handcrafted yeas, oils + salts, reiki, tarot readings and all other things witchy",
    eventType: "Pop Up",
    category: { first: "Maker", second: "apothecary" },
    location: "3441 Tuttle Rd, Shaker Heights, OH 44122"
  },
  {
    eventName: "Three Hexagons Studio",
    eventString: "threehexagonsstudio",
    attendees: [],
    briefDetails: "Hand Crafted Wood Products",
    details: "Fine Art and Food Related Wood Products. Made in Northeast Ohio from Northeast Ohio Hardwoods.",
    eventType: "Pop Up",
    category: { first: "Maker", second: "woodworker" },
    location: "3619 Walton Ave, Cleveland, OH 44113"
  },
  {
    eventName: "The Roaming Biscuit",
    eventString: "theroamingbiscuit",
    attendees: [],
    briefDetails: "A Little Taste of Home Everywhere.",
    details: "Everyone knows how we do, roaming around town providing deliciousness in the form of unrivaled biscuit Sammies. Team Biscuit Slingers we still be popping up around Cleveland but there will be new adventures in the future and new possibilities for The Roaming Biscuit and all of you delightful humans in the Sammie family. We can’t wait to share more as it all unfolds in 2021!",
    eventType: "Pop Up",
    category: { first: "Food", second: "breakfast" },
    location: "6030 Middle Ridge Rd, Madison, OH 44057"
  },
  {
    eventName: "Taco Libre",
    eventString: "tacolibre",
    attendees: [],
    briefDetails: "Can you beat the heat?",
    details: "They call me, 'El Ruso'. I started to work grilling meats in the number one taqueria of Culiacán, Sinaloa, named 'La Carreta de Lichi' by Mr. Alfredo Valdez Zazueta in 1996. There I learned that work dignifies a person. I went on to work in different restaurants and taquerias in Mazatlán - Mexicali - Guadalajara - Nuevo Laredo, Tamaulipas - Ímuris, Sonora and Tijuana, Baja California. The last, being my place of birth. I tried to make sure that all the restaurants where I worked were the number one in quality and famous places in the cities where they were located, and I obtained it today, what I humbly do, is a little bit of each of those places. I hope that you like my food. I will try to grow and be able to offer more meals that I know to prepare. I give you my hard work and my dreams with love in every dish I give you. Enjoy, Pura Calidad!",
    eventType: "Pop Up",
    category: { first: "Food", second: "breakfast" },
    location: "6030 Middle Ridge Rd, Madison, OH 44057"
  },
  {
    eventName: "Critical Strike Gaming",
    eventString: "criticalstrikegaming",
    attendees: [],
    briefDetails: "Test you might in heroes of the well",
    details: "Heroes of the Well is a very intricate table top battle royal developed by me. I will be hosting occasional pop ups to promote the spread of interest in the game. It involves playing with a squad, drafting unique heroes and doing battle with your skills against other squads and the play field progressively shrinks, come check it out!",
    eventType: "Pop Up",
    category: { first: "Maker", second: "boardgames" },
    location: "3619 Walton Ave, Cleveland, OH 44113"
  }
  

 
  
];

db.Event.deleteMany({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
