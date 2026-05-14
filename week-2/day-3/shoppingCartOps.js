/**
 * Shopping Cart Summary
 * Test Data representing a shopping cart in an e-commerce website.
 */
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Task 1: Use filter() to get only inStock products
let c1 = cart.filter((element) => element.inStock);
console.log("In-Stock Products:", c1);

// Task 2: Use map() to create a new array with: { name, totalPrice }
const c2 = cart.map(element => ({
  name: element.name,
  totalPrice: element.price * element.quantity
}));
console.log("Mapped Cart (Name & Total Price):", c2);

// Task 3: Use reduce() to calculate grand total cart value
const c3 = cart.reduce((total, element) => {
    return total + (element.price * element.quantity);
}, 0);
console.log("Grand Total Cart Value:", c3);

// Task 4: Use find() to get details of "Mouse"
const c4 = cart.find((element) => element.name === "Mouse");
console.log("Details of Mouse:", c4);

// Task 5: Use findIndex() to find the position of "Keyboard"
const c5 = cart.findIndex((element) => element.name === "Keyboard");
console.log("Index of Keyboard:", c5);
