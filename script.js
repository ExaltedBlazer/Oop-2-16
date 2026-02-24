'use strict';

const Person = function (firstName, birthYear) {
  console.log(this);
  // Instance properties
  // let firstName;
  // let yearOfBirth;
  this.firstName = firstName;
  this.yearOfBirth = birthYear;

  // Never do this
  this.calcAge = function () {
    const info = `This is ${this.firstName} and he is ${2037 - this.yearOfBirth} years old.`;
    console.log(info);
  };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New empty object is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);
console.log(matilda instanceof Person);
console.log(jack instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(jack));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);
console.log(matilda.species);
console.log(jack.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);

//Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

console.log(arr.length);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
const h1 = document.querySelector('h1');

// Coding Challenge #1

// This is the car class
const Car = function (make, speed) {
  console.log(this);
  // Instance properties
  // let firstName;
  // let yearOfBirth;
  this.carName = make;
  this.carSpeed = speed;

};


// Accelerate method
Car.prototype.accelerate = function () {
  this.carSpeed += 10
  const currentSpeed = `The ${this.carName} current speed is ${this.carSpeed}mph`;
  console.log(currentSpeed);
};

// Brake method
Car.prototype.brake = function () {
  this.carSpeed -= 5
  const currentBrakeSpeed = `The ${this.carName} brake speed is ${this.carSpeed}mph`;
  console.log(currentBrakeSpeed);
};

// Car object 1
const ford = new Car("ford", 70)
console.log(ford);
ford.accelerate();
ford.brake()

// Car object 1
const tesla = new Car("tesla", 80)
console.log(tesla);

tesla.accelerate();
tesla.brake()

