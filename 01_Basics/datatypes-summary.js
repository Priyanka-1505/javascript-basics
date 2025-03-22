//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// Reference Memory stake(primitive) heap(non-primitive)

// primitive example (inthis it's just give a copy that's why first variable not changing itself value)
let myyoutubechannel = 'priyankapateldotcom'
let anothername = myyoutubechannel
anothername = 'yorussskipiyuu'

console.log(myyoutubechannel)
console.log(anothername)

// non-primitive example (in this it's give a reference to same memory that's why changed all reference variables value)
let userOne = {
    'email':'pikupatel515@gmail.com',
    "pass" : "piya0001"
}
let userTwo = userOne
userTwo.email = 'ppatel@google.com'
console.log(userOne.email)
console.log(userTwo.email)

