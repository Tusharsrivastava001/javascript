//Counter programm hai
const decreasedbtn=document.getElementById('dec');
const resetbtn=document.getElementById('res');
const increasebtn=document.getElementById('inc');

const countLabel=document.getElementById('countlabel');


let count=0;
increasebtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}
decreasedbtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    countLabel.textContent=count;
}