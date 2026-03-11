

const courses = ["javascript", "react", "node", "mongodb", "express"];
let c1=courses.filter((element=>element.length>5))
console.log(c1)
let c2=courses.map((element=>element.toUpperCase(element)))
console.log(c2)
let c3=courses.find((element=>element==='react'))
console.log(c3)
let c4=courses.findIndex((element=>element==='node'))
console.log(c4)


