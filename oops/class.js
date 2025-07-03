class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greet(){
        console.log("Hello welcome to the university "+this.name+" "+this.age);
    }
};

const p1=new person("joohn",56);
p1.greet();

//classa expression
const animale=class{
    constructor(type){
        this.type=type;
    }
};




//getter and setter
class user{
    constructor(name){
        this.name=name;
    }
    get name(){
        return this.name;
    }
    set name(value){
        if(value>2) this.name=value;
    }
};
//Synatax
class Myclass{

};
const instance=new Myclass(); // Here 

class mathutils{
    static p1=3.145;
    static square(x){
        return x*x;
    }
}; // static memeber belong to the class itself not the instances
console.log(mathutils.square(5));

//inheritance

class Animals{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} make a noise`);
    }
};

class Dog extends Animals{
    constructor(name,brees){
        super(name);
        this.brees=brees;
    }
    speak(){
        console.log(`${this.name} barks`)
    }

};

const d1=new Dog("tommy","bulldog");
d1.speak();



//getter and setter in the classa
class Temperature{
    constructor(cel){
        this.cel=cel;
    }
    get faren(){
        return this.cel*9/5+32;
    }
    set fahren(value){
        this.cel=(value - 32) * 5/9;
    }
};
const temp=new Temperature(25);
console.log(temp.faren);
temp.fahren=86;
console.log(temp.cel)

