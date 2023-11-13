const newArray=[0,1,2,3,4]
const myarray=new Array(1,2,3,4)

console.log(myarray.length)
console.log(newArray[0])

myarray.push(5)
myarray.push(6)
console.log(myarray)
myarray.pop()
console.log(myarray)
myarray.unshift(4)  //add number at the start
console.log(myarray)
myarray.shift()     //remove number at the start
console.log(myarray)
const myNewArray=myarray.join()
console.log(myarray)
console.log(myNewArray)
// slice do not changes the original array just print part of array
// splice modify the array and slice the original array

