class BankAccount {
    constructor(ownerName, balance, acctNum){
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
    }

    deposit(depositNumber){
        this.balance = this.balance + deposit;
    }

    withdraw(withdrawNumber){
        this.balance = this.balance - withdrawNumber;
    }

    noWithdraw(withdrawNumber){
        this.balance = this.balance + withdrawNumber
    }
}

class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, acctNum, overdraftEnabled){
        super(ownerName, balance, acctNum)
        this.overdraftEnabled = overdraftEnabled;
    }

    withdraw (withdrawNumber) {
        super.withdraw(withdrawNumber);

        if(this.balance < -100){
            console.log('you cant have less then -100 in your account ')
            super.noWithdraw(withdrawNumber)
        }
        if(this.balance >= -100 && this.balance <= 0){
            this.overdraftEnabled === true
            console.log(' a negative balance in your account it is', this.balance)
        } 
    }
}

class SavingsAccount extends BankAccount {
    withdraw(withdrawNumber){
        super.withdraw(withdrawNumber)
        super.noWithdraw(withdrawNumber)
        console.log('You can not withdraw from you savings :) your savings:', this.balance)
    }

}

const abdul = new CheckingAccount('abdul', 100, '123123')
const abdul2 = new SavingsAccount('abdull', 200, '123321')

abdul.withdraw(300)
console.log(abdul.balance)

abdul.withdraw(188)
console.log(abdul.balance)

abdul.withdraw(150)
console.log(abdul.balance)

console.log('-------------For Savings -------------------')
abdul2.withdraw(20)
console.log(abdul2.balance)