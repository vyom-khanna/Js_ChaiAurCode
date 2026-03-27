//singleton
//  -Object.create

//object literals

const mySym = Symbol("key1")
const JsUser = {
    "full name" : "Hitesh Chaudhary",
    [mySym] : "mykey1",
    age : 18,
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLogInDays : ["mon","sat"],
}

// console.log(JsUser.email)
// //console.log(JsUser[email])//wrong
// console.log(JsUser["email"]);//right

// //console.log(JsUser."full name");  wrong
// console.log(JsUser["full name"]);


// console.log(typeof JsUser.mySym);//value updated//type is string and not symbol
// console.log(typeof JsUser[mySym])//value updated// type is symbol

// JsUser.email = "hitesh@chatgpt.com"
// //Object.freeze(JsUser)//cannont freeze a single key
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser.email)
// console.log(JsUser)

JsUser.greeting = function(){
    console.log(`hello Mr.${this["full name"]}`)
}


console.log(JsUser.greeting())




