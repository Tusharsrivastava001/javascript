const pi=3.14159;
let radius;
let circum;



document.getElementById('sub').onclick=function(){
    radius=document.getElementById('radius').value;
    radius=Number(radius);
    circum=2*pi*radius;
    document.getElementById('ans').textContent=circum;
}