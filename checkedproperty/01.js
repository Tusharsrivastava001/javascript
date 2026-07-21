const mycheckbox=document.getElementById('mycheckbox');
const visabtn=document.getElementById('visabtn');
const masterbtn=document.getElementById('mastercard');
const paypal=document.getElementById('paypal');
const mysub=document.getElementById('submit');


const subresult=document.getElementById('subres');

const subpay=document.getElementById('subpay');
const res=document.getElementById('fin');


mysub.onclick=function(){
    if(mycheckbox.checked){
        subresult.textContent=`YOu are subscribed here `;
    }
    else{
        subresult.textContent=`you are not subscribed`;
    }

    if(visabtn.checked){
        subpay.textContent=`you are payin with the visa`
    }
    else if(masterbtn.checked){
        subpay.textContent=`you are paying with teh matercard`;
    }
    else if(paypal.checked){
        subpay.textContent=`you are paying with the paypal`;
    }
}