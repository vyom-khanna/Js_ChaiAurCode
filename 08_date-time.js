//Dates

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

let myCreatedDate = new Date(2023,0,23,5,300)//yr mon[0-11] day hr min
console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate.toDateString())

console.log()

let myCreatedDate2 = new Date("2026-01-08")//yr mon[0-11] day hr min
console.log(myCreatedDate2.toLocaleString())
console.log(myCreatedDate2.toDateString())

let mytimestap = Date.now();
console.log(Math.floor(mytimestap/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth()+1)
console.log(newDate.getFullYear())


