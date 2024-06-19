//Capitalize Function
//gets a character at the first index,  the slice() extracts the substring starting from second index to zero
// function capitalize(str) {
//   if (typeof str !== "string" || str.length === 0) {
//     throw new Error("Invalid input: expected a non-empty string.");
//   }
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(capitalize("moses")); //Messi

//2
// function reverseStr(str) {
//   if (typeof str !== "string" || str.length === 0) {
//     throw new Error("Invalid input: expected a non-empty string.");
//   }
//   return str.split("").reverse().join("");
// }
// console.log(reverseStr("moses"));

//without using built in functions
//3
// function isPalindrome(str) {
//   if (typeof str !== "string" || str.length === 0) {
//     throw new Error("Invalid input: expected a non-empty string.");
//   }
//   let reversedStr = reverseStr(str);
//   return reversedStr === str;
// }

// Test cases

// console.log(isPalindrome("madam"));

//4

// function wordCount(str) {
  // Split the string by spaces and filter out empty strings
//   let words = str.split(" ").length;
//   return words;
// }

// console.log(wordCount("momses msms cbcbc ncnc"));

//1
//doubling an array

// function double(arr) {
//   let doubleArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     doubleArray.push(arr[i] * 2);
//   }
//   return doubleArray;
// }
// let numbers = [1, 2, 3, 4];
// let result = double(numbers);
// console.log(result);
// const double = arr => arr.map(num => num * 2);

// let numbers = [1, 2, 3, 4];
// let result = double(numbers);
// console.log(result);

//2
// function filterEvenArr(arr) {
//   let evenArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenArray.push(arr[i]);
//     }
//   }
//   return evenArray;
// }

// function filterEvenArr(arr) {
//   return arr.filter((num) => num % 2 === 0);
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = filterEvenArr(numbers);
// console.log(result);

// const sum = arr => arr.reduce((acc, curr) => acc + curr);
//reduce iterates over the each elemnt in a array  and returns asingle value
// let numbers = [1, 2, 3, 4];
// let result = sum(numbers);
// console.log(result);

//average
// const average = (arr) => arr.reduce((acc, val) => acc + val) / arr.length;

// Example usage:
// let numbers = [1, 2, 3, 4, 5];
// let avg = average(numbers);
// console.log(avg);

// const person1 = {
//   firstName: "Moses",
//   lastName: "Furaha",
//   age: 23,
//   isAdult: function () {
//     return this.age >= 18;
//   },
// };

// const person2 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 17,
//   isAdult: function () {
//     return this.age >= 18;
//   },
// };

// const person3 = {
//   firstName: "Jane",
//   lastName: "Smith",
//   age: 30,
//   isAdult: function () {
//     return this.age >= 18;
//   },
// };

// const people = [person1, person2, person3];

// function filterByAge(people, minAge) {
//   return people.filter((person) => person.age >= minAge);
// }

// const minAge = 18;
// const filteredPeople = filterByAge(people, minAge);

// console.log(`People aged ${minAge} or older:`);
// filteredPeople.forEach((person) => {
//   console.log(`${person.firstName} ${person.lastName}, age ${person.age}`);
// });

// Test the isAdult method
// console.log(person1.isAdult()); // true
// console.log(`My name is ${person1.firstName}, ${person1.lastName}`); // My name is Moses, Furaha

//function composing
//getting two functions and then compose them

//function one doubling array
// function double(arr) {
//   let doubleArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     doubleArray.push(arr[i] * 2);
//   }
//   return doubleArray;
// }

// //function two as getting the sum
// function sum(arr) {
//   return arr.reduce((a, b) => a + b, 0);
// }

// //create a funciton compose that takes the functions as parameters
// function compose(f, g) {
//   return function (x) {
//     return f(g(x));
//   };
// }
// //call the compose function
// const checkCompose = compose(sum, double);
// const array = [1, 2, 3, 4, 5, 6];

// console.log(checkCompose(array));
