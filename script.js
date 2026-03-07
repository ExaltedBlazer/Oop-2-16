'use strict';

/*
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


// class expression
//const PersonCl = class{}

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    // const fName;
    // const bYear;
    this.fName = fullName;
    this.bYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.bYear);

  }

  greet() {
    console.log(`Hey ${this.fName}`);

  }

  get age() {
    return 2037 - this.bYear
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fName = name;
    else alert(`${name} is not a full name!`)
  }

  get fullName() {
    return this._fName
  }

}

const jessica = new PersonCl('Jessica Davis', 1996)
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fName}`);
};

jessica.greet();
jessica.fullName = 'Jessica Davis';
//1. Classes are NOT hoisted
//2. Classes are first-class citizens
//3. Classes are excecuted in strict mode

const walter = new PersonCl('Walter', 1965);


const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

//// Coding Challenge #2

// This is the car class 
class CarCl {
  constructor(make, speed) {
    this.carName = make;
    this.carSpeed = speed;
  }

  accelerate() {
    this.carSpeed += 10
    const currentSpeed = `The ${this.carName} current speed is ${this.carSpeed}mph`;
    console.log(currentSpeed);
  };

  brake() {
    this.carSpeed -= 5
    const currentBrakeSpeed = `The ${this.carName} brake speed is ${this.carSpeed}mph`;
    console.log(currentBrakeSpeed);
  };

  get speedUS() {
    return this.carSpeed / 1.6
  }

  set speedUS(speed) {
    this.carSpeed = speed * 1.6
  }
}

const ford = new CarCl("ford", 120)
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake()
ford.speedUS = 50;
console.log(ford);


// Coding Challenge #3

const Car = function (make, speed) {
  this.carName = make;
  this.carSpeed = speed;

};

Car.prototype.accelerate = function () {
  this.carSpeed += 10
  const currentSpeed = `The ${this.carName} current speed is ${this.carSpeed}mph`;
  console.log(currentSpeed);
};

Car.prototype.brake = function () {
  this.carSpeed -= 5
  const currentBrakeSpeed = `The ${this.carName} brake speed is ${this.carSpeed}mph`;
  console.log(currentBrakeSpeed);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.carSpeed += 20;
  this.charge--;
  const currentSpeed = `The ${this.carName} is going at ${this.carSpeed}mph, with a charge of ${this.charge}%`;
  console.log(currentSpeed);
};

const tesla = new EV("tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
tesla.brake();


class PersonCl {
  constructor(fullName, birthYear) {
    this.fName = fullName;
    this.bYear = birthYear;
  }

 
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2012 - this.bYear);

  }

  greet() {
    console.log(`Hey ${this.fName}`);

  }

  get age() {
    return 2012 - this.bYear
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fName = name;
    else alert(`${name} is not a full name!`)
  }

  get fullName() {
    return this._fName
  }

// static method
static hey() {
  console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // Call the parent constructor
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(`I'm ${2012 - this.bYear} years old, but as a student I feel more like ${2012 - this.bYear + 10}`);
  }
};

const martha = new StudentCl('Martha Jones', 1990, 'Computer Science');
StudentCl.hey();
martha.introduce();
martha.calcAge();


const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2000, 'Computer Science');
jay.calcAge();
console.log(jay);
*/

// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// Static version of all of the above

class Account {
  locale = navigator.language; // Public field
  bank = 'bankist'; // Public field
  // #movements = []; // Private field
  // #pin; // Private field

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  applyLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// acc1._approveLoan(1000);

console.log(acc1.pin);
console.log(acc1.movements); 