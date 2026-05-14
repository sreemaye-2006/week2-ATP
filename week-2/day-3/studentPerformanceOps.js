/**
 * ASSIGNMENT 2: Student Performance Dashboard
 * You are working on a college result analysis system.
 */

// Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// 1. filter() students who passed (marks ≥ 40)
const s1 = students.filter((element) => element.marks >= 40);
console.log("Passed Students:", s1);

// 2. map() to add a grade field based on marks
const s2 = students.map((element) => {
    let grade;
    if (element.marks >= 90) {
        grade = "A";
    } else if (element.marks >= 75) {
        grade = "B";
    } else if (element.marks >= 60) {
        grade = "C";
    } else {
        grade = "D";
    }
    // Return a new object with the grade added
    return { ...element, grade: grade };
});
console.log("Students with Grades:", s2);

// 3. reduce() to calculate average marks
const s3 = students.reduce((acc, ele) => {
    return acc + (ele.marks / students.length);
}, 0);
console.log("Average Marks:", s3);

// 4. find() the student who scored 92
const s4 = students.find((element) => element.marks === 92);
console.log("Student with 92 marks:", s4);

// 5. findIndex() of student "Kiran"
const s5 = students.findIndex((element) => element.name === "Kiran");
console.log("Index of Kiran:", s5);
