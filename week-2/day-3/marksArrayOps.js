/**
 * Marks Array Operations
 * Demonstrates conditions, filtering, and reduction on numerical data.
 */
const marks = [78, 92, 35, 88, 40, 67];

// 1. filter() - Get marks greater than or equal to 40 (Passing marks)
let m1 = marks.filter((element) => {
    if (element >= 40) {
        return element;
    }
});
console.log("Marks >= 40:", m1);

// 2. map() - Add 5 grace marks to every score
let m2 = marks.map((element => element + 5));
console.log("Marks + 5:", m2);

// 3. reduce() - Find the highest mark in the array
let m3 = marks.reduce((acc, ele) => {
    if (acc > ele) {
        return acc;
    } else {
        return ele;
    }
});
console.log("Highest Mark:", m3);

// 4. find() - Find the first mark that is less than 40
let m4 = marks.find((element => element < 40));
console.log("First failing mark (< 40):", m4);

// 5. findIndex() - Find the index of the score 92
let m5 = marks.findIndex((element => element === 92));
console.log("Index of 92:", m5);