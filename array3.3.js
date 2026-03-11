
const marks = [78, 92, 35, 88, 40, 67];
let m1=marks.filter((element)=>
{
    if(element>40)
    {
        return element
    }else if(element=40)
    {
        return element
    }
})
console.log(m1)
let m2=marks.map((element=>element+5))
console.log(m2)
let m3=marks.reduce((acc,ele)=>{
    if(acc>ele)
    {
        return acc
    }else{
        return ele
    }
})
console.log(m3)
let m4=marks.find((element=>element<40))
console.log(m4)
let m5=marks.findIndex((element=>element===92))
console.log(m5)