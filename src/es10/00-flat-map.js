//  flat
const array = [1, 1, 2, 3, 4, 5, [1, 2, 3, 5, [1, 2, 3, 9], 3, 1], 4];
console.log(array.flat(3));

//  flatMap

const array1 = [1, 2, 3, 4, 5];
console.log(array1.flatMap((value) => [value, value * 2]));

const array2 = [1, 2, 3, 4, 5];
console.log(array2.map((value) => [value, value * 2]));
