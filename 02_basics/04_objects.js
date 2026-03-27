//const tinderUser = new Object() //singleton obj
const tinderUser = {} //non singleton obj


tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "hitesh",
            lastname : "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname)

const obj1 = {
    1 : 'a',
    2 : 'b'
}
const obj2 = {
    3 : 'c',
    4 : 'd'
}
//--const obj3 = {obj1,obj2}
//--const obj3 = Object.assign({},obj1,obj2)
//console.log(obj1)//if not used {} obj2 gets saved in obj1 and then saved into obj3
//console.log(obj3);

const obj3 = {...obj1 , ...obj2}
console.log(obj3)