"use strict";

///////////////////////////////////////
// Activating Strict Mode

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :)");

// const private = 567;
// const interface = "Audio";

///////////////////////////////////////
// Functions

// function logger() {
//   // console.log("My name is Whitegod");

//   const name = arguments[0];
//   console.log(name);
//   return name;
// }

// calling / running / invoking function
// logger("Whitegod", 458, {}, []);
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const appleJuice = fruitProcessor(5, 0);
// appleJuice;

// const appleOrangeJuice = fruitProcessor(4, 7);
// appleOrangeJuice;

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function Declaration
// const age = calcAge(1290);
// console.log(age);

// function calcAge(birthYear) {
//   return 2023 - birthYear;
// }

// const age = calcAge(1990);
// age;

// calcAge1();
// age;
// let age = function () {
//   // console.log(birthYear);
// };

// Function Expressions
// const calcAge1 = function (birthYear) {
//   return 2023 - birthYear;
// };

// const age1 = calcAge1(2004);
// const age2 = calcAge1(1976);
// console.log(age1, age2);

// ///////////////////////////////////////
// // Arrow functions
// const calcAge2 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge2(1956);
// age3;

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1934, "Williams"));

///////////////////////////////////////
// Functions Calling Other Functions

// function a() {
//   console.log("Function A has starting executing");

//   c();

//   console.log("Function A has finished executing");
// }

// function b() {
//   console.log("Function B was called from function C");
// }

// function c() {
//   console.log("Function C has starting executing");

//   b();

//   console.log("Function C has finished executing");
// }

// a();

function cutPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
  return juice;
}

// console.log(fruitProcessor(2, 3));

///////////////////////////////////////
// Reviewing Functions

///////////////////////////////////////
// Coding Challenge #1

// Sat. 29/07/23

///////////////////////////////////////
// Introduction to Arrays

// const friend1 = "Whitegod";
// const friend2 = "Steven";
// const friend3 = "Peter";

const arr = [];
const arr1 = new Array("a", "b", "c", "d");
arr1;
arr;

const friends = ["Whitegod", "Steven", "Peter"];
friends;

///////////////////////////////////////
// Basic Array Operations (Methods)
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

friends[friends.length] = "Favour";
friends[friends.length] = "Jona";

friends[3] = "Fibi";
friends[0] = "Robiu";

// Adding elements to the end of an array
friends.push("Whitegod");
friends.push("Paula");

// Removing elements from the end of an array
const lastElem = friends.pop();
lastElem;

// Adding elements to the beginning of an array
friends.unshift("Victor");
const firstElem = friends.shift();
firstElem;

// Removing elements from the beginning of an array

friends;

// console.log(friends[friends.length - 1]);

function calcAge(birthYear) {
  return 2023 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[3]);
// const age5 = calcAge(years[4]);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[3]),
  calcAge(years[4]),
];
// console.log(ages);

// ages.push(age1);
// ages.push(age2);
// ages.push(age3);
// ages.push(age4);
// ages.push(age5);

ages;

friends;
// console.log(friends.indexOf("Fibi"));

// if (friends.indexOf("Bob") < 0) {
//   console.log("Bob is not in the friends array");
// } else {
//   console.log(`Bob is at index ${friends.indexOf("Bob")}`)
// }
// console.log(friends.indexOf("Bob"));

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];

// const tip = calcTip(100);
// tip;

// const bill1 = bills[0];
// const bill2 = bills[1];
// const bill3 = bills[2];
// console.log(bill1);

// const tip1 = calcTip(bill1);
// tip1;

// calcTip(bills[0]);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

///////////////////////////////////////
// Introduction to Objects
const whitegodArray = [
  "Whitegod",
  "Kingsley",
  2037 - 1991,
  "Software Engineer",
  ["Eminspire", "Balafama"],
];

const obj = {};

// const whitegod = {
//   firstName: "Whitegod",
//   lastName: "Kingsley",
//   age: 2023 - 1991,
//   job: "Software Engineer",
//   friends: ["Eminspire", "Balafama"],
//   students: [],
// };

// whitegod;

///////////////////////////////////////
// Dot vs. Bracket Notation

// const whitegod = {
//   firstName: "Whitegod",
//   lastName: "Kingsley",
//   age: 2023 - 1991,
//   job: "Software Engineer",
//   friends: ["Eminspire", "Balafama"],
//   students: [],
//   ["Completed Projects"]: 15,
// };

// whitegod;

// console.log(whitegod.friends);

// console.log(whitegod["lastName"]);
// console.log(whitegod["age"]);
// console.log(whitegod["job"]);
// console.log(whitegod["friends"][0]);

// // whitegod["Completed Projects"] = 5;

// let acctName;

// whitegod[acctName] = "Whitegod Kingsley Something else";

// console.log(whitegod[acctName]);
// console.log(whitegod["Completed Projects"]);

// Object.freeze(whitegod);

// whitegod.firstName = "Paula";
// whitegod.lastName = "Christ";

// console.log(whitegod.students.push("Juilet"));
// console.log(whitegod.students.push("Dice Victor"));
// console.log(whitegod.students.push("Precious"));
// console.log(whitegod.students);

///////////////////////////////////////
// Object Methods

const whitegod = {
  firstName: "Whitegod",
  lastName: "Kingsley",
  age: 2023 - 1991,
  job: "Software Engineer",
  friends: ["Eminspire", "Balafama"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   console.log(this);
  //   return 2023 - birthYear;
  // },

  calcAge: function (birthYear) {
    this.age = 2023 - birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge(1991)}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

whitegod;

// console.log(whitegod.calcAge(1967));
// console.log(whitegod.age);

// console.log(whitegod.getSummary());

/////////////////////////
// Coding Challenge #3

// Wednesday. 02/08/23
///////////////////////////////////////
// Iteration: The for Loop
// console.log("Lifting weights repetition 1 🏋️‍♀️");
// console.log("Lifting weights repetition 2 🏋️‍♀️");
// console.log("Lifting weights repetition 3 🏋️‍♀️");
// console.log("Lifting weights repetition 4 🏋️‍♀️");
// console.log("Lifting weights repetition 5 🏋️‍♀️");
// console.log("Lifting weights repetition 6 🏋️‍♀️");
// console.log("Lifting weights repetition 7 🏋️‍♀️");
// console.log("Lifting weights repetition 8 🏋️‍♀️");
// console.log("Lifting weights repetition 9 🏋️‍♀️");
// console.log("Lifting weights repetition 10 🏋️‍♀️");

// for loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing

// function calcAge(birthYear) {
//   return 2023 - birthYear;
// }

// const ages1 = [];
// const years1 = [1990, 1967, 2002, 2010, 2018];

// for (let i = 0; i < years1.length; i++) {
//   const age = calcAge(years1[i]);
//   ages1.push(age);
// }

// console.log(ages1);

// for (let i = 0; i < whitegodArr.length; i++) {
//   //Read from whitegodArr
//   console.log(whitegodArr[i], typeof whitegodArr[i]);
// }

const ages1 = [];
const years1 = [1990, 1967, 2002, 2010, 2018];

for (let i = 0; i < years1.length; i++) {
  ages1.push(2023 - years1[i]);
}

// console.log(ages1);

// Breaking and Continuing
// console.log("------ ONLY STRINGS ----");
// for (let i = 0; i < years1.length; i++) {
//   if (typeof whitegodArr[i] !== "string") continue;

//   console.log(whitegodArr[i], typeof whitegodArr[i]);
// }

// console.log("------ BREAK WITH NUMBER ----");
// for (let i = 0; i < years1.length; i++) {
//   if (typeof whitegodArr[i] === "number") break;

//   console.log(whitegodArr[i], typeof whitegodArr[i]);
// }

///////////////////////////////////////
// Looping Backwards and Loops in Loops

// const whitegodArr = [
//   "Whitegod",
//   "Kingsley",
//   2037 - 1991,
//   "Software Engineer",
//   ["Eminspire", "Balafama"],
// ];

// for (let i = whitegodArr.length - 1; i >= 0; i--) {
//   console.log(i, whitegodArr[i]);
// }

// L1
/*
 * a1
 * a2
 * a3
 * a4
 * a5
 */
// L2
// L3

// for (let exercise = 1; exercise < 100; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 100; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repittion ${rep} 🏋️`);
//   }
// }

///////////////////////////////////////
// The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;

//   if (dice === 6) console.log("Loop is about to end...");
// }

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/