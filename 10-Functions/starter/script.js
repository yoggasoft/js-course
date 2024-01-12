'use strict';

///////////////////////////////////////
// Default Parameters

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

// createBooking('LH123');
// createBooking('LH123', 2, 600);
// createBooking('LH123', 2);

///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
// const flight = 'LH234';

// const whitegod = {
//   name: 'Whitegod Kingsley',
//   passport: 24739434893,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739434893) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport');
//   }

//   console.log(flight);
//   console.log(whitegod);
// };

// checkIn(flight, whitegod);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(whitegod);
// checkIn(flight, whitegod);

///////////////////////////////////////
// Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others];
};

// Higher order function
const transformer = function (str, fn) {
  console.log('Original string: ' + str);
  console.log(`Transformed string: ' + ${fn(str)}`);

  console.log('Transformed by: ' + fn.name);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

///////////////////////////////////////
// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterWhitegod = greet('Hey');

greeterWhitegod('Whitegod');

greeterWhitegod('Steven');

const greet1 = greeting => name => console.log(`${greeting} ${name}`);
greet1('Hi')('Whitegod');

///////////////////////////////////////
// The call and apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}` });
  },
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

lufthansa.book(899, 'Whitegod');
lufthansa.book(256, 'Jonathan');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const airpeace = {
  airline: 'Airpeace',
  iataCode: 'AP',
  bookings: [],
};

// Call method

// book.call(eurowings, 23, 'Sarah Williams');
// book.call(lufthansa, 175, 'Mary Cooper');
// book.call(airpeace, 283, 'Whitegod Kingsley Cooper');

// // Apply method
// const flightData = [568, 'George Cooper'];
// book.apply(airpeace, flightData);

// book.call(airpeace, ...flightData);

// The bind method

// book.call(eurowings, 23, 'Sarah Williams');

// const bookEW23 = book.bind(eurowings, 23);

// bookEW23('Sarah Williams');
// bookEW23('Sarah');
// bookEW23('Williams');

// With event listeners

// lufthansa.planes = 300;
// lufthansa.buyplane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// lufthansa.buyplane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyplane.bind(lufthansa));

///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will never run again'))();

///////////////////////////////////////
// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
booker();

// console.dir(booker);

///////////////////////////////////////
// More Closure Examples

// Example 1
let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;

  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re-assigning f function
h();
f();

// Example 2

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 10000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

// Function to increment counter
const add = (function () {
  let counter = 0;

  return function () {
    counter += 1;
    return counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
