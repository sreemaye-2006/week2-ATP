
// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// Tasks:
//     1. filter() employees from IT department
const e1=employees.filter((element)=>element.department==="IT")
console.log(e1)
//     2. map() to add:
//             netSalary = salary + 10% bonus
const e2 = employees.map(element => ({
    netSalary: element.salary + element.salary * 0.10
}));

console.log(e2);
//     3. reduce() to calculate total salary payout
const e3 = employees.reduce((total, emp) => {
  return total + emp.salary;
}, 0);

console.log(e3);
//     4. find() employee with salary 30000
const e4 = employees.find(emp => emp.salary === 30000);
console.log(e4);
//     5. findIndex() of employee "Neha"
const e5 = employees.findIndex(emp => emp.name === "Neha");
console.log(e5);