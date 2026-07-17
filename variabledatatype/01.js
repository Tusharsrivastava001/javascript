let x;
x=100;
console.log(x);

//let's create somethng
let age=25;
console.log(age);
let prc=103.33;
console.log(prc);
let name="Tushar";
let gpa=7.97;
console.log(gpa);
let bool=true;

//let's create the sentance the using the backticks 
console.log(`your ${age}  and  your gpa is ${gpa} and that is it man 
    `);


console.log(typeof(age));
console.log(typeof(name));
console.log(typeof(bool));

let namei = "Tushar";      // String
let agei = 21;             // Number
let isStudent = true;     // Boolean
let city;                 // Undefined
let car = null;           // Null
let big = 1234567890n;    // BigInt
let id = Symbol("id");    // Symbol

console.log(typeof(namei));
console.log(typeof(age));
console.log(typeof(isStudent));
console.log(typeof(car));
console.log(typeof(big));
console.log(typeof(id));


//here is non primitave data type
let person ={
    name:"Tushar",
    age:888
};

console.log(person);
console.log(typeof(person));


let arr=[10,20,30];

function greet(){
    console.log("Hello");
}

greet();
console.log(arr);
console.log(typeof(arr));

let today=new Date();
console.log(today);