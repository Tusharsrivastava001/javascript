let sayhi=base=>class extends base{
    hi(){
        console.log("hi")
    }
};
class person {}
class friendly extends sayhi(person){}
new friendly().hi();


class eg{
    method(){

    }
};
console.log(typeof eg.prototype.method); //ye method ka type bata rah ahai 
