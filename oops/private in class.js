class bankaccount{
    #balance=0; //this is the private thing only access in inside
    deposit(amt){
        this.#balance+=amt;
    }

    getBalance(){
        return this.#balance;
    }
};
const acc=new bankaccount();
acc.deposit(4000);
console.log(acc.getBalance());
