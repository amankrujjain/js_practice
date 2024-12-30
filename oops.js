// encasulation - making something private to that class


class Car{
    constructor(color, type){
        this.color = color;
        this.type  = type
    }

    getCar(){
        console.log(`This is a ${this.color} car and is a ${this.type}`);
    }
};

let tata = new Car("Black", "Sedan");
let volk = new Car("Red", "Suv")

tata.getCar()


volk.getCar()


// inheritance - child can have the access of variables defined in the parent

// class Parent{
//     constructor(dog, owner){
//         this.dog = dog,
//         this.owner = owner
//     }
// }

// class Child extends Parent{
//     relation(){
//         console.log(`This dog named ${this.dog} belongs to ${this.owner}`)
//     }
// }

// const one = new Child("moti","Aman");
// one.relation()

class Parent{
    constructor(dog,owner){
        this.dog = dog;
        this.owner = owner;
    }
};

class Dog extends Parent{
    relation(){
        console.log(`This dog's name is ${this.dog} and it belongs to ${this.owner}`)
    }
}

let newDog = new Dog("Moti", "Aman");
newDog.relation()
// Polymorphism --allwos objects to be treated as an instance 
// of their parent class yet mainting their own environment


class Sound{
    makeSound(){
        console.log("I make sound")
    }
}

class Sound2 extends Sound{
    makeSound(){
        console.log("Sound 2 makes sound")
    }
}

class Sound3 extends Sound{
    makeSound(){
        console.log("Sound3 makes sound")
    }
}

const data = [new Sound(), new Sound2(), new Sound3()];

data.forEach((data)=> data.makeSound())


//Abstraction - showing only the necessary datas


class BankAccount{
    #balance
    constructor(balance){
        this.#balance = balance
    }

    deposite(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log(` deposite : ${amount}`)
        }
    }

    withdraw(amount){
        if( amount > 0 && amount <= this.#balance){
            this.#balance -= amount
            console.log(` withdrawn : ${amount}`)
        }
    }

    getBalance(){
        return this.#balance
    }
}

const account = new BankAccount(1000);

account.deposite(100);
account.withdraw(50);

// account.#balance = 100
console.log(account.getBalance())