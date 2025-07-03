function cal(datestr){
    let birthdate=new Date(datestr);
    let now=new Date();

    //
    let age=now.getFullYear()-birthdate.getFullYear();

    let m=now.getMonth()-birthdate.getMonth();
    if(m<0 || (m==0 && now.getDate()<birthdate.getDate())){
        age--;
    }
    return age;
}

console.log(cal("2004-05-17"));
