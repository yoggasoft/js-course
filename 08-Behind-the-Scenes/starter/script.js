'use strict';

///////////////////////////////////////
// Scoping in Practice

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // Reasssigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;

//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// let firstName = 'Jonas';

// calcAge(1991);
// console.log(firstName);

// // console.log(age);
// // printAge();

const person = {
  firstName: 'Whitegod',
  lastName: 'Kingsley',
  birthYear: 1991,

  calcAge: function () {
    return new Date().getFullYear() - this.birthYear;
  },
};

function calcAge() {
  console.log(this);
  return new Date().getFullYear() - this.birthYear;
}

const hello = 'Hello world Whitegod!';

// console.log(person.calcAge());
// console.log(calcAge());

const h1 = document.querySelector('h1');

h1.addEventListener('click', function (e) {
  console.log(this);
  console.log(e);
});
