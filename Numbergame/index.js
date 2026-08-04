//NUmber guessing game

const minNum=1;
const maxNum=10;

const ans= Math.floor(Math.random() * (maxNum-minNum+1));
console.log(ans);
let attempt=0;  // to track the user that how mant attempt 
let guess;
let runnig=true;

while(runnig){
    guess=window.prompt(`Guess the number betwene the ${minNum} and ${maxNum}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("Pls type the valid number okAY ");
    }
    else if(guess>maxNum || guess<minNum){
        window.alert("Please enter a valid Number");
    }
    else{
        attempt++;
        if(guess<ans){
            window.alert("TOO LOW ANS PLS TRY AGAIN");
        }
        else if(guess>ans){
            window.alert("TOO high number pls try again");
        }
        else{
            window.alert(`correct boom it tool the ${attempt} to reach it`);
             runnig=false;
        }
    }
   
}