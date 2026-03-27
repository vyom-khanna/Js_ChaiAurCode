//array

const myArr = [1,2,"3",4,5]
console.log(typeof myArr[2])
console.log(typeof myArr[0])
myArr.push('6')
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(-1)
myArr.unshift(-1)
console.log(myArr)
myArr.shift()
console.log(myArr)
console.log(myArr.includes(3))
console.log(myArr.includes("3"))
console.log()


const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
console.log("\n")

console.log(myArr.slice(1,3))//gets elements from myarray [1,3)
console.log(myArr)
console.log(myArr.splice(1,3))//removes element from myarray [1,3]
console.log(myArr)