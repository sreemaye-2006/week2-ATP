/**
 * Courses Array Operations
 * Demonstrates basic array operations on string data.
 */
const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter() - Find courses with names longer than 5 characters
let c1 = courses.filter((element) => element.length > 5);
console.log("Courses with length > 5:", c1);

// 2. map() - Convert all course names to uppercase
let c2 = courses.map((element) => element.toUpperCase());
console.log("Uppercase courses:", c2);

// 3. find() - Find the exact course 'react'
let c3 = courses.find((element) => element === 'react');
console.log("Find 'react':", c3);

// 4. findIndex() - Get the index position of the course 'node'
let c4 = courses.findIndex((element) => element === 'node');
console.log("Index of 'node':", c4);
