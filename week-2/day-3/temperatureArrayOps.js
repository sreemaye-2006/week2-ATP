/**
 * Temperature Array Operations
 * Demonstrates various array methods like filter, map, reduce, find, and findIndex.
 */
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// 1. filter() - Get temperatures greater than 35
let t1 = temperatures.filter((element) => element > 35);
console.log("Temperatures > 35:", t1);

// 2. map() - Convert Celsius to Fahrenheit
let t2 = temperatures.map((element => element * 1.8 + 32));
console.log("Temperatures in Fahrenheit:", t2);

// 3. reduce() - Calculate the average temperature
let t3 = temperatures.reduce((accumulator, element) => accumulator + element / temperatures.length, 0);
console.log("Average temperature:", t3);

// 4. find() - Find the first temperature greater than 40
let t4 = temperatures.find((element => element > 40));
console.log("First temperature > 40:", t4);

// 5. findIndex() - Find the index of the temperature 28
let t5 = temperatures.findIndex(element => element === 28);
console.log("Index of temperature 28:", t5);