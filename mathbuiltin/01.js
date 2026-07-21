console.log(Math.trunc(2.222));

console.log(Math.PI);


let rad=7;
console.log(Math.PI*rad*rad);

//round to the nearest Interger
console.log(Math.round(2.4));
console.log(Math.round(4.7));


// Math ciel
console.log(Math.ceil(4.3));
console.log(Math.ceil(4.1));

//always round down okay
console.log(Math.floor(4.9));
console.log(Math.floor(4.1));


console.log(Math.random());
//it give the random number between the 0 and 1


//what if we want to have the random number between the 1 and 10 

let rand=Math.floor(Math.random()*10)+1;
console.log(rand);


//here we use the max min
console.log(Math.max(10,20,3,444));


console.log(Math.min(10,20,3,444));

console.log(2**5);
console.log(Math.pow(2,5));

console.log(Math.sqrt(81));

console.log(Math.cbrt(50));


console.log(Math.abs(-1111));

let arr=[10,20,30,40,50];
console.log(Math.max(...arr));

console.log(Math.min(...arr));