//primitive datatype (call by value) 
//7 types
//String, Number, Boolean, null, undefined, Symbol, BigInt
//we make changes in their copy and then they get stored



//js is dynamically typed language
//eg: const score=true; datatype is not safe
//typescript is statically typed language
//eg: const score:number=100; type safety is there



const Id = Symbol('123')
const anotherId =  Symbol('123')
console.log(Id==anotherId)//false

const bignum=794887438798374874783912n//stored in bigint when we put a 'n' at end
console.log(typeof(bignum))//number



//non primitive datatype (call by reference(address))
//
//Array, Objects, Functions
//all return object but functions are object functions so functions return function


const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}
const myFunction = function(){
    console.log("hello world");
}

console.log(typeof heros)//obj
console.log(typeof myObj)//obj
console.log(typeof myFunction)//func



//**********summary********************** *//
/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */

//+*+*+*+*+*+*+*+*+**+*+*+*+*+*+*+*+**+*+*+*+*+*+*+*+*+**+*+*+*+*+*+**+*+*+*+*+*+*+*+*+*+*+*

//primitive -> stack memory        values are copied and passed on
//Non-Primitive -> heap memory     address/reference is passed on