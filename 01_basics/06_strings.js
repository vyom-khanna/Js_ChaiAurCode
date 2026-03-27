const name="hitesh"
const repoCount=50

console.log(name+repoCount+"value")//outdated
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

let gameName = new String('hitesh-hc-com')
console.log(typeof gameName)
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName)//unchanged
//JavaScript strings are immutable — even when wrapped in an object.
gameName=gameName.toUpperCase();
console.log(gameName)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))//-1
console.log(gameName.indexOf('T'))//2
console.log(gameName.lastIndexOf('H'))


const newString = gameName.substring(0,4) //HITE ==> [0,4) // input always +ve
console.log(newString)

const anotherString =  gameName.slice(-8,4)
console.log(anotherString)
// h  i  t  e  s  h  -  h  c
// 0  1  2  3  4  5  6  7  8
// -9 -8 -7 -6 -5 -4 -3 -2 -1
//[-8,4)
//len = 9


const newstr1 = "   hitesh@gmail.com       "
console.log(newstr1)
console.log(newstr1.trim())

const url = "https://hitesh.com/hitesh%20choudhry"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))
console.log(gameName.split('-'))//separted in an array