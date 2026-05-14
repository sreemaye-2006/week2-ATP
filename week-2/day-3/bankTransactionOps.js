/**
 * ASSIGNMENT 5: Bank Transaction Analyzer
 * You are building a bank statement summary.
 */

// Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1. filter() all credit transactions
const t1 = transactions.filter(element => element.type === "credit");
console.log("Credit Transactions:", t1);

// 2. map() to extract only transaction amounts
const t2 = transactions.map(element => element.amount);
console.log("Transaction Amounts:", t2);

// 3. reduce() to calculate final account balance
const t3 = transactions.reduce((balance, element) => {
    if (element.type === "credit") {
        return balance + element.amount;
    } else {
        return balance - element.amount;
    }
}, 0);
console.log("Final Account Balance:", t3);

// 4. find() the first debit transaction
const t4 = transactions.find(element => element.type === "debit");
console.log("First Debit Transaction:", t4);

// 5. findIndex() of transaction with amount 10000
const t5 = transactions.findIndex(t => t.amount === 10000);
console.log("Index of transaction with amount 10000:", t5);