let age=window.prompt('How are you');
age = Number(age);
age+=16;
console.log(age,typeof(age));

let x="0";
let y="Pizza";
let z="pizaa";

x=Number(x);
y=String(y);
z=Boolean(z);


console.log(x,typeof(x));
console.log(y,typeof(y));
console.log(z,typeof(z));

let pi=3.14159;
let radius;
let circum;

radius=window.prompt("Enter the radius of the circl");

radius=Number(radius); //type conversion is required

console.log(2*pi*radius)