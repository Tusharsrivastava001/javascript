function rolldice(){
    const numdice=document.getElementById("numofdice").value;

    const diceresult=document.getElementById('diceresult');
    const diceimage=document.getElementById('diceimage');

    const values=[];
    const images=[];

    for(let i=0;i<numdice;i++){
        const value=Math.floor(Math.random()*6)+1; //1 se 6 tak chaye
        values.push(value);
        images.push(`<img src='${value}.png'>`);
    }
    diceresult.textContent=`dice: ${values.join(',')}`;

    diceimage.innerHTML=images.join('');
}