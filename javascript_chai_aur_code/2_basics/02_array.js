const marvel=['ironman','america']
const dc=['superman','batman']
marvel.push(dc)
console.log(marvel)
const allheros=marvel.concat(dc)
console.log(allheros)
const allNewHeros=[...dc,...marvel];
console.log(allNewHeros)
const realArray=allNewHeros.flat(Infinity)
console.log(realArray)
console.log(Array.from("Darpan"))
console.log(Array.from({name:"Darpan"})) // interesting for interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));