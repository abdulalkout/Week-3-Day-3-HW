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
Governor.implementation()

// ------------------- Inheritance ---------------------------//

class Person{
    constructor(name, hair,){
        this.name =name;
        this.eyes = 2;
        this.mouth = 1;
        this.hair = hair || true;
        this.hands = 2;
    }

    eat = () => {
        console.log('eat Yaamyy')
    }

    drink = (drink) => {
        console.log(`I am drinking ${drink}`)
    }

    sleep = () => {
        console.log('Sleep ZzzzzZ ZzzzZ')
    }
}

class PostalWorker extends Person {
    constructor(name, hair){
        super(name, hair);
    }

    delever(){
        console.log('Postal Worker deliver mail')
    }
    
    myNormalDay = () => {
        this.drink('milk')
        this.eat()
        this.delever()
        this.sleep()
    }

}

class Chef  extends Person {
    constructor(name, hair, hasAHat){
        super(name, hair);
        this.hasAHat = hasAHat || true;
    }

    cook(){
        console.log(`the chef is cooking rice`);
    }

    eat(){
        super.eat();
        console.log('and im cooking at the same time')
    }
    
    myNormalDay = () => {
        this.drink('beer')
        this.eat()
        this.cook()
        this.sleep()
    }
}

// ----------- PostalWorker ------------//
console.log('---------------Q2 log PostalWorker----------------');
// const tom = new PostalWorker('tom') 
// const tommy = new PostalWorker('tommy') 
const PostalWorkerArray = [new PostalWorker('tom'), new PostalWorker('tommy')]
PostalWorkerArray.forEach(postalWorker => {
    console.log(`${postalWorker.name}`)
    postalWorker.myNormalDay()
    console.log(`---------------------------------------`)
})

// ----------- Chef ------------------//
console.log('---------------Q2 log Chef----------------');
const chefArray = [new Chef("John", 'black', true), new Chef("semren", 'brown', false)]
chefArray.forEach( chef => {
    console.log(`${chef.name}`)
    chef.myNormalDay()
    chef.eat()
    console.log(`---------------------------------------`)
})
