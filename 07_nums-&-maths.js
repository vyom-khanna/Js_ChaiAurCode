//***************numbers************** */

const score = new Number(400)
console.log(typeof score)
console.log(score)
console.log(typeof score.toString())
console.log(score.toString().length)
console.log(score.toFixed(2))//shows answer to x decimal places

const otherNumber =  123.8966
console.log(otherNumber.toPrecision(4))
console.log(otherNumber.toPrecision(3))
console.log(otherNumber.toPrecision(2))
console.log(otherNumber.toPrecision(1))

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-US'))
console.log(hundreds.toLocaleString('en-IN'))

console.log(Number.MAX_VALUE)

console.log("\n")

//*******************************maths**************************** */

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(-4.2))
console.log(Math.floor(-5.1))
console.log(Math.min(4,3,3,1,-1,9))
console.log(Math.max(4,3,3,1,-1,9))
console.log()



console.log(Math.floor((Math.random()*10)+1))
const min = 1
const max =  90

console.log(Math.floor(Math.random()*(max-min+1))  + min)