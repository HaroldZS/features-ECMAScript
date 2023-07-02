// arrays destructuring

let fruits = ["Apple", "Banana", "Orange"];
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[1]);

let [, , fruit] = fruits;
console.log(fruit);

function getFullName() {
  // We simulate obtaining the data of a person
  return ["John", "Doe"];
}

// Using array destructuring
let [firstName, lastName] = getFullName();
console.log(firstName, lastName);

// Object destructuring

let user = { username: "Harold", age: 24 };
let { username, age } = user;
console.log(username, age);
console.log(username, user.age);

// spread operator

let person = { username: "Harold", age: 24 };
let country = "BO";

let data = { id: 1, ...person, country };

console.log(data);

// rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 9, 2, 3, 4, 5);
