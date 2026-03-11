// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
// Tasks:
//     1. Use filter() to get only inStock products
let c1=cart.filter((element)=>element.inStock)
console.log(c1)

//     2. Use map() to create a new array with:  { name, totalPrice }
const c2 = cart.map(element => ({
  name: element.name,
  totalPrice: element.price * element.quantity
}));

console.log(c2);
//     3. Use reduce() to calculate grand total cart value
const c3=cart.reduce((total,element)=>
{
    return total+(element.price*element.quantity)
},0)
console.log(c3)
//     4. Use find() to get details of "Mouse"
const c4=cart.find((element)=>element.name==="Mouse")
console.log(c4)
//     5. Use findIndex() to find the position of "Keyboard"
const c5= cart.findIndex((element)=>element.name==="keyboard");
console.log(c5)
