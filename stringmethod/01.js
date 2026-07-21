let name="Tusharsrivastava";
console.log(name.length);


//here if we want to know the character at which index 
console.log(name.charAt(2));

console.log(name.charAt(3));

console.log(name.at(-1));

console.log(name.indexOf('a'));
console.log(name.lastIndexOf('a'));


//include is used to check weather the string is exits krta hai ki nhii 
console.log(name.includes('sriv'));

console.log(name.includes('tusharww'));

//here is also the startwith and endwith man
console.log(name.startsWith('tushar'));

console.log(name.endsWith('a'));

//this is the important things man 
//uppper case and lower case man 
let str="hello";
console.log(str.toUpperCase());


console.log(str);

console.log(str.toLowerCase());

//here is the trim funciton used to remove the spaces from the it man 
let stir="      tushsar       ";

console.log(stir.trim());


let che="I like to eat the panner";

console.log(che.replace('eat','have'));
//slice is used to extract the part of the text from the string
console.log(str.slice(0,3));

// here is most important 
//to the substring from the
console.log(che.substring(0,4));

//here the split is used to convert the string into the intgers
let fruits="Apple, mango, orange";
console.log(fruits.split(','));

let f="tushar";
let b="srivatsava";

console.log(f.concat(b));