//here we will learn how to accept the user input 

let username;
// username=window.prompt("What is your name sir");
// console.log(username);


document.getElementById("mysub").onclick=function(){
  username=document.getElementById("mytext").value; 
  console.log(username); 
  document.getElementById('myh').textContent=`hello bro how are you ${username}`;
};