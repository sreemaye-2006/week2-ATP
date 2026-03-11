
// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


// Tasks:
//     1. filter() all credit transactions
const t1 = transactions.filter(element => element.type === "credit");
console.log(t1);
//     2. map() to extract only transaction amounts
const t2 = transactions.map(element => element.amount);
console.log(t2);
//     3. reduce() to calculate final account balance

//     4. find() the first debit transaction
const  t3 = transactions.find(element => element.type === "debit");
console.log(t3);
//     5. findIndex() of transaction with amount 10000
const t4 = transactions.findIndex(t => t.amount === 10000);
console.log(t4);