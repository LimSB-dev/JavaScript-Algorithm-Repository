let arr = [1, 2, 3, 4];

arr.push(5);
console.log(arr); // [1, 2, 3, 4, 5]

arr.pop();
console.log(arr); // [1, 2, 3, 4]

arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4]

const foo = arr.slice(1, 3);
console.log(foo); // [1, 2]
console.log(arr); // [0, 1, 2, 3, 4]

arr.splice(1, 2, 10, 11);
console.log(arr); // [0, 10, 11, 3, 4]

console.log(arr.indexOf(3)); // 3

arr.forEach(function (value, index, array) {
  console.log(value, index);
});
// Output:
// 0 0
// 10 1
// 11 2
// 3 3
// 4 4

const mappedArr = arr.map(function (value) {
  return value * 2;
});
console.log(mappedArr); // [0, 20, 22, 6, 8]

const filteredArr = arr.filter(function (value) {
  return value % 2 === 0;
});
console.log(filteredArr); // [0, 10, 4]

arr.sort();
console.log(arr); // [0, 10, 11, 3, 4]

arr.sort((a, b) => a - b);
console.log(arr); // [0, 3, 4, 10, 11]

arr.sort((a, b) => b - a);
console.log(arr); // [11, 10, 4, 3, 0]
