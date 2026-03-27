const marvel = ["th","sp","ir"]
const dc = ["bt","fl","joker"]

//marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][2])

//const allheros = marvel.concat(dc)
//console.log(allheros)

const all_heros = [...marvel,...dc]
console.log(all_heros)

let another_ar=[1,[2,4,6],5,2,8,2,[1]]
another_ar=another_ar.flat(Infinity)
console.log(another_ar)

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name : "hitesh"}))//[] cannot form array as not specifiend that we need to name array of keys or array of pairs

let c1=10
let c2=20
let c3=30
console.log(Array.of(c1,c2,c3))