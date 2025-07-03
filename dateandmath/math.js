console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.LN2);


//some rounding methods
console.log(Math.round(8.9));
console.log(Math.floor(8.4));
console.log(Math.ceil(835.2));
console.log(Math.trunc(8.55));


//Arithmtic and Math functin

console.log(Math.pow(2,4));
console.log(Math.sqrt(4));
console.log(Math.max(-1,1,23,45));

//random number
console.log(Math.random()); // 0 se 1 ke beech koe bhi random number de dega

function getrandom(min,max){
    return Math.floor(Math.random()*(max-min+1));
}
console.log(getrandom(1,6));


//working with the date
let now=new Date();
let specific=new Date("2023-12-25");
let fromparts=new Date(2025,2,22,15,30);

console.log(now);
console.log(specific);
console.log(fromparts);

