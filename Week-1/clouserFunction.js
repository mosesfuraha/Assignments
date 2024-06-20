//When you create a function inside another function, the inner function has access to:
// Its Own Scope: Variables defined within the inner function.
// Outer Function's Scope: Variables defined in the outer function.
// Global Scope: Variables defined in the global scope.

// let newVar = 12;
// function mainFunction() {
//   let outerVariable = "I am from the outer function";

//   function closerFunction() {
//     let insideCloser = "Am inside the closer function";
//     console.log(newVar); //logs 12 from the global scope
//     console.log(outerVariable); //logs 12 from the functoin  scope
//     console.log(insideCloser); //logs a string from its own  scope
//   }

//   return closerFunction;
// }

// const closureExample = mainFunction();
// closureExample();

//call and apply they take this as there first arguments while for call it individual arguments for the function.
// for apply it takes this  followed by an array of arguments for the function.

const person1 = {
  name: "Moses Furaha",
  age: 20,

  greet: function () {
    console.log(
      `Hello , My name is ${this.name} and I am ${this.age} years old`
    );
  },
  introduce: function (language, country) {
    console.log(
      `Hello, my name is ${this.name}. I speak ${language} and I'm from ${country}.`
    );
  },
};
const greetings = person1.greet;
greetings.call(person1); //call method is used to call greet method with this keyword set to

// person1.greet();

// const person2 = {
//   name: "Moses Furaha",
//   age: 21,
// };
// person1.greet.call(person2);

// person1.greet.apply(person2);

// const binded = person1.greet.bind(person2);
// binded();

// document.addEventListener("DOMContentLoaded", () => {
//   const button = document.getElementById("this-btn");

//   button.addEventListener("click", function handleClick() {
//     console.log(`Button Id: ${this.id}`);
//     console.log(`Button Text : ${this.textContent}`);
//   });

// using arrow functions
//   button.addEventListener("click", () => {
//     console.log("Using arrow function:");
//     console.log(`Button ID: ${this.id}`);
//     console.log(`Button Text: ${this.textContent}`);
//   });
// });

//resueable component with this
// document.getElementById("elementId").addEventListener("click", function () {
//   createTimer(10, "timer");
// });
// function createTimer(duration, elementId) {
//   let time = duration;
//   console.log(this);
//   // Closure to store the timer's state and handle the timer logic
//   function Timer(element) {
//     this.element = element;
//     this.time = time;

//     //callback function to update time
//     this.updateTimer = () => {
//       if (this.time > 0) {
//         this.element.textContent = `Time left: ${this.time} seconds`;
//         this.time--;
//       } else {
//         this.element.textContent = "Time's up!";
//         clearInterval(this.timerInterval);
//         console.log("Timer has reached 0.");
//       }
//     };

//     // Start the timer
//     this.timerInterval = setInterval(this.updateTimer, 1000);
//     this.updateTimer();
//   }

//   // Get the DOM element and create a Timer instance
//   const element = document.getElementById(elementId);
//   new Timer(element);
// }
