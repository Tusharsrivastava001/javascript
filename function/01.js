//here we are goin to read about the fucntion in the javascript

function greet(name="vivek"){
    console.log("This is the function man");
    console.log(`here is the ${name}`);
}

function add(a,b){
    return a+b;
}

//here is the default parameter

greet("tusahr");
console.log(add(12,22));


//here the function also can be stored in the variable k andar man 

const sub = function(a,b){
    return a-b;
}


console.log(sub(11,22));

//here is the arrow function man 
const mul = (a,b) => {
    return a*b;
}
console.log(mul(11,222));


//Anonymous function 
//function without the name
const greeti = function(){
    console.log("This is the second greet function without the name");
} 

greeti();


//yaha par callback ko samjte hai 
function hi(name){
    console.log(`hello ${name}`);
}
function process(callback){
    callback("Tushar");
}
process(hi);

//here is the recursion code man 

function fact(n){
    if(n==0 || n==1) return 1;
    return fact(n-1)*n;
}
console.log(fact(5));



function login(username,password){
    if(username=="Admin" && password=="124"){
        console.log("Welcome to the home page man")
    }
    else{
        console.log("Nhi hia ");
    }
}

login("Admin",1224);


//Largest Number

function lar(a,b){
    return a > b ? a : b;
}
console.log(lar(11,22));

//reverse the string 
function rev(s){
    return s.split("").reverse().join("");
}
console.log(rev("Tushar"));