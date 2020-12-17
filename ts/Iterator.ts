// iterator and Generator

/*

forof loop
forin loop

*/

const arr: Array<number> = [1, 2, 3, 4, 5, 8, 6, 9, 10, 7];
let sum: number = 0;
for (const x of arr) {
  sum += x;
}
console.log(arr);

console.log("sum of all elements in array " + sum);

console.log(arr.sort((a: number, b: number) => a - b));

const obj: { name: string; age: number } = {
  name: "john doe",
  age: 51,
};

for (const key in obj) {
  console.log(key);
}
