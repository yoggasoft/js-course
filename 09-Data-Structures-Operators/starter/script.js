'use strict';

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ startIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////
// String Methods Practice

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
//     '_',
//     ' '
//   )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
//     ':',
//     'h'
//   )})`.padStart(36, '');
//   console.log(output);
// }

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', () => {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;

//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// Working With Strings -- Part 1

/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);

// console.log(plane.length);
console.log('Javascript is awesome'.length);
console.log('Javascript is awesome'.trim());

console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.indexOf('Portugal'));

console.log(airline.slice(2, 7));
console.log(airline.slice(7));

console.log(airline.slice(-8));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats

  const s = seat.slice(-1);

  if (s === 'B' || s === 'E') console.log('You get the middle seat.');
  else console.log.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/

// Working With Strings -- Part 2

/*
const airline = 'TAP Air Portugal';

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

// wHiteGOd //Whitegod

const passenger = 'wHiteGOd';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower.charAt(0).toUpperCase() + passengerLower.slice(1);

// Comparing emails
const email = 'hello@whitegod.io';
const loginEmail = '   HellO@whitegod.io   ';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = loginEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// replacing

// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// Booleans

const plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus' && plane.endsWith('neo'))) {
  console.log('Part of the new Airbus family');
}

// Pracice excercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed to board!');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snack and a gun for protection');

// Split and Join

console.log('a+very+nice+string'.split('+'));
console.log('Whitegod Kingsley'.split(' '));

const [firstName, lastName] = 'Whitegod Kingsley'.split(' ');

const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log('New name: ' + newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('whitegod kingsley');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '-').padEnd(30, '-'));
console.log('Whitegod'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(439584968409845));
console.log(maskCreditCard(439584968409845348757n));
console.log(maskCreditCard(4395849684098450000n));

const gmail = 'whitegodkingsley@gmail.com';
const firstThree = gmail.slice(0, 3);
const lastThree = gmail.slice(-12);

console.log(firstThree + '**********' + lastThree);
*/

///////////////////////////////////////
// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);

rest
  .set('categories', ['Italiano', 'Pizzeria', 'Vegetarian', 'Orangic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest.size);

// console.log(rest);

// console.log(rest.get(arr));

///////////////////////////////////////
// Sets

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

// console.log(new Set('Whitegod'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
console.log(ordersSet.has('Bread'));
console.log(ordersSet.add('Gralic Bread'));
console.log(ordersSet.add('Gralic Bread'));

ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);

console.log(new Set('WhitegodKingsley').size);

///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

// Property Names
// const properies = Object.keys(openingHours);
// console.log(properies);

// let openStr = `We are open on ${properies.length} days `;

// for (const day of properies) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// Property Values
// const values = Object.values(openingHours);
// console.log(values);

// Property Entries
// const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

///////////////////////////////////////
// Optional Chaining

if (restaurant.openingHours && restaurant.openingHours.open)
  console.log(restaurant.openingHours.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant?.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant?.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays

const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[1]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');

///////////////////////////////////////
// The for-of Loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// console.log('--------- CONSOLE LOG ---------');
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

///////////////////////////////////////
// Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  numGuests: 20,
  // numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Whitegod Kingsley',
};

// OR asignment operator
rest1.numGuests = rest1.numGuests || 10;
rest1.numGuests ||= 10;

// numlish assignment operator (null or undefined)
rest1.numGuests = rest1.numGuests ?? 10;
rest1.numGuests ??= 10;

// AND assignment operator
rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

///////////////////////////////////////
// The Nullish Coalescing Operator

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

///////////////////////////////////////
// Short Circuiting (&& and ||)
console.log('-------- OR ----------');

// Use ANY type, return ANY data tyle, short-circuiting

// console.log(3 || 'Whitegod');
// console.log('' || 'Whitegod');

// const assigned = true || 0;
// console.log(undefined || 0);

// console.log('Five' || '' || false || 0 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log('------ AND ------');

// console.log(true && 'Whitegod');
// console.log(5 && true && 'Juliet' && null && 'First Name');

// console.log(restaurant);

// if (restaurant.orderPizza) {
//   restaurant.orderPasta('Mushrooms', 'Spinach', 'Tomato');
// }

// restaurant.orderPizza &&
//   restaurant.orderPasta('Mushrooms', 'Spinach', 'Tomato');

///////////////////////////////////////
// Rest Pattern and Parameters

// SPREAD, because on RIGHT side of = [1, 2, ...[3, 4], 4];

// REST, because on LEFT side
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// function add(...numbers) {
//   let sum = 0;

//   console.log(numbers);

//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }

//   return sum;
// }

// const res1 = add(3, 4, 5, 7, 8, 9, 10, 345, 6778);
// console.log(res1);

// function marketList(...items) {
//   console.log(items);
// }

// marketList('milk', 'bread', 'eggs', 'milks', 'juice', 'butter');

// marketList('milk', 'bread', 'eggs', 'juice');

// const foodstuffs = ['milk', 'bread', 'eggs', 'juice'];

// const frige = ['Water', 'Drinks', ...foodstuffs];
// console.log(frige);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
console.log(restaurant);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// const frige2 = frige.concat(foodstuffs);

///////////////////////////////////////
// The Spread Operator (...)
const array = [7, 8, 9, 5, 6, 7, 86];
const badNewArr = [1, 2, array[0], array[1], array[2]];
console.log(badNewArr);

const newArr = [1, 2, ...array];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

// Copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Whitegod';
const letters = [...str, ' ', 'K'];
console.log(letters);
console.log(...str);

// console.log(`${...str} Kingsley`)

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

///////////////////////////////////////
// Destructuring Objects
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   startIndex: 2,
// });

const { name, openingHours, mainMenu } = restaurant;
// console.log(name, openingHours, mainMenu);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   mainMenu: menus,
//   categories: tag,
// } = restaurant;
// console.log(restaurantName, hours, menus, tag);

// // Default values
// const { menuss = [], starterMenu: starters = [] } = restaurant;
// console.log(menuss, starters);

// // Mutating variables

// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested Objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

///////////////////////////////////////
// Destructuring Arrays

const arr3 = [2, 3, 4];
const a = arr3[0];
const b = arr3[1];
const d = arr3[2];

const [x, y, z] = arr3;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;

/// Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// [main, secondary] = [secondary, main];

// console.log(main, secondary);

// const [] = restaurant.categories;

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6, 7]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
