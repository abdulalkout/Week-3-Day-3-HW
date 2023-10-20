// Static Methods and Proprties
class Governor {
    static name = "John";
    static age = 45;
    static ssn = 12121212

    static implementation = () => {
        console.log('implementing state laws and overseeing the operation of the state executive branch')
    }
    static newImplementations = () => {
        console.log("As state leaders, governors advance and pursue new and revised policies and programs using a variety of tools")
    }

    static budgeting = () => {
        console.log("Executive budgets, and legislative proposals and vetoes.")
    }
}

console.log(`the Governor ${Governor.name} he is ${Governor.age} and his SSN = ${Governor.ssn}`)
console.log(Governor.implementation())

// ------------------- Inheritance ---------------------------//

class Person{
    constructor(name, eyes, mouth, hair, hands){
        this.name =name;
        this.eyes = 2;
        this.mouth = 1;
        this.hair = hair || true;
        this.hands = 2;
    }

    eat = () => {
        console.log('Yaamyy')
    }

    drink = (drink) => {
        console.log(`I am drinking ${drink}`)
    }

    sleep = () => {
        console.log('ZzzzzZ ZzzzZ')
    }
}

class PostalWorker extends Person {
    constructor(name, eyes, mouth, hair, hands){
        super(name, eyes, mouth, hair, hands);
    }
    
    deliver = () => {
        console.log(' Postal Worker deliver mail')
    }

}

class Chef  extends Person {
    constructor(name, eyes, mouth, hair, hands, hasAHat){
        super(name, eyes, mouth, hair, hands, this.eat);
        this.hasAHat = true;
    }
    
    cook = (cooking = rice) => {
        console.log(`the chef is cooking ${cooking}`);
    }
}

// ----------- PostalWorker ------------//
const tom = new PostalWorker('tom') 
const tommy = new PostalWorker('tommy') 
console.log(`${tom.name} he ${tom.eat()}, ${tom.drink('beers')}, ${tom.sleep()} and ${tom.deliver()} `)
