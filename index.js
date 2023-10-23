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
    constructor(name, hair, eyes){
        this.name =name;
        this.eyes = eyes;
        this.mouth = 1;
        this.hair = hair || true;
        this.hands = 2;
    }

    eat() {
        console.log('eat Yaamyy')
    }

    drink(drink){
        console.log(`I am drinking ${drink}`)
    }

    sleep(){
        console.log('Sleep ZzzzzZ ZzzzZ')
    }
}

class PostalWorker extends Person {
    constructor(name, hair, eyes){
        super(name, hair, eyes);
    }

    delever(){
        console.log('Postal Worker deliver mail')
    }

    sleep(){
        super.sleep()
        console.log('I slept for 8 hours')
    }
    
    myNormalDay = () => {
        super.drink('milk')
        super.eat()
        this.delever()
        this.sleep()
    }

}

class Chef  extends Person {
    constructor(name, hair,eyes, hasAHat){
        super(name, hair,eyes);
        this.hasAHat = hasAHat || true;
    }

    cook() {
        console.log(` I am cooking rice`);
    }

    drink(drink){
        super.drink(drink);
        console.log('and im cooking at the same time')
    }  
    
    myNormalDay(drink) {
        this.drink(drink)
        super.eat()
        this.cook()
        super.sleep()
    }
}



// ----------- PostalWorker ------------//
console.log('---------------Q2 log PostalWorker----------------');

// const tom = new PostalWorker('tom') 
// const tommy = new PostalWorker('tommy') 
const postalWorkerArray = [new PostalWorker('tom', 'black', 'brown'), new PostalWorker('tommy', 'black', 'brown')]
postalWorkerArray.forEach(postalWorker => {
    console.log(`${postalWorker.name}`)
    postalWorker.myNormalDay()
    console.log(`---------------------------------------`)
})


// ----------- Chef ------------------//
console.log('---------------Q2 log Chef----------------');
const chefArray = [new Chef("John", 'black','green', true), new Chef("semren", 'brown', 'brown', false)]
chefArray.forEach( chef => {
    console.log(`${chef.name}`)
    chef.myNormalDay('beer')
    console.log(`---------------------------------------`)
})



console.log(`--------------Other ways--------------`)

chefArray[0].drink('wine')
postalWorkerArray[1].sleep()