function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["Harold", "Zurita", "Simon", "Cruz"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);
console.log(it.next());
