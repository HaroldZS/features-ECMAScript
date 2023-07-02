var lastName = "David";
lastName = "Oscar";
console.log(lastName);

let fruit = "Apple";
fruit = "Kiwi";
console.log(fruit);

const animal = "Dog";
animal = "Cat";
console.log(animal); // Does not allow reassigning the value

const fruits = () => {
  //block
  if (true) {
    var fruit1 = "Apple"; // Function scope
    let fruit2 = "Kiwi"; // Block scope
    const fruit3 = "Banana"; // Block scope
  }
  console.log(fruit1);
  console.log(fruit2); // Not defined
  console.log(fruit3); // Not defined
};

fruits();
