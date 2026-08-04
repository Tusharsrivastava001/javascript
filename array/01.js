//here now we are goin to read about the array man 
let students=['tushar','priya','ishika','gitika'];

console.log(typeof(students));
console.log(students);

//Method 2 of the creating array 
let number=new Array(10,20,30);

console.log(number);

console.log(typeof(number));

//here arary can store the multiple datatype

let arr=['tushar',21,true,99.55];

console.log(arr);

arr[1]=222;
console.log(arr);


console.log(arr.length);


//now here looop 
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


//using the while loop 
let i=0;
while(i<arr.length){
    console.log(students[i]);
    i++;
}


for(let ele of students){
    console.log(ele);
}


number.push(1222);

console.log(number);

number.pop();

console.log(number);

// to add the sometihn in the beginin man

number.unshift(22222);
console.log(number);

console.log(number.indexOf(10));

let a2rr=[10,20,30];

console.log(a2rr.includes(10));


//reverse the arry 

a2rr.reverse();

console.log(a2rr);


a2rr.sort();

console.log(a2rr);



//this is inteview trap  sort function is used as string by defualt
let arr1=[10,2,30];

arr1.sort();

console.log(arr1);


//if we actual want to sort

arr1.sort((a,b)=>a-b);

console.log(arr1);


let name=['i','love','you'];
console.log(name.join(""));


//slice does Not change orginal array 
console.log(arr1.slice(1,2));  // this does not change the original array 
arr1.splice(1,2);
console.log(arr1);


let arr3=[1,2,3,34,44];
let [a,b,c]=arr3;

console.log(a);
console.log(b);


let numberi=new Array(10,20,30);
//array can store any datatype 

numberi.push(200);
numberi.push(400);
numberi.push(500);
console.log(numberi);

numberi.pop();

let arr4=[20,30];
arr4.unshift(10);

console.log(arr4);

//array shift is used to remove the first element
arr4.shift();
console.log(arr4);


arr4.reverse();

console.log(arr4);


//spread operator 
let ai=[1,2];
let bi=[...ai,22];
console.log(bi);
// it is used to join the elemnet

//rest operator 
let [aj,...rest]=[10,20,30,40,50];

console.log(rest);