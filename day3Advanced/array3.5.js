
// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
const s1=students.filter((element)=>element.marks>=40)
console.log(s1)

//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
const s2=students.map((element)=>{
    if(element.marks>=90)
    {
        console.log("A")
    }else if(element.marks>=75)
    {
console.log("B")
    }
    else if(element.marks>=60)
    {
        console.log("c")
    }else{
        console.log("D")
    }
})
console.log(s2)

//    3. reduce() to calculate average marks
const s3=students.reduce((acc,ele)=>{
return acc+ele.marks/students.length},0)
console.log(s3)
//    4. find() the student who scored 92
const s4=students.find((element)=>element.marks===92)
console.log(s4)
//    5. findIndex() of student "Kiran"
const s5=students.findIndex((element)=>element.name==="Kiran")
console.log(s5)




