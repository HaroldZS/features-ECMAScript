class User {
  // Methods
  greeting() {
    return "Hello";
  }
}

const harold = new User();
console.log(harold.greeting());

const developer = new User();
console.log(developer.greeting());

// Constructor

class admin {
  // Constructor
  constructor() {
    console.log("new user");
  }
  greeting() {
    return "Hello";
  }
}

const david = new admin();

// This

class Client {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return "Hello";
  }

  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new Client("Ana");
console.log(ana.greeting());

// Setters and getters

class Waiter {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  #speak() {
    return "Hello";
  }

  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get #uAge() {
    return this.age;
  }

  set #uAge(n) {
    this.age = n;
  }
}

const waiter = new Waiter("David", 15);

console.log(waiter.uAge);
console.log((waiter.uAge = 24));
