let user = {
id: 101,
 name: "Ravi",
preferences: {
theme: "dark",
 language: "en"
 }
};
let getUser={...user}

let {name,preferences:{theme}}=user;
console.log(getUser);
console.log(name,theme);




 const order = {
 orderId: "ORD1001",
customer: {
name: "Anita",
address: {
city: "Hyderabad",
pincode: 500085
}
},
 items: [
{ product: "Laptop", price: 70000 }
 ]
};
const copy=structuredClone(order)
 order.customer.address.city="kochi"
 order.items[0].price=60000
 console.log(order)
 console.log(copy)