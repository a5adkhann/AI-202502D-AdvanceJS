// console.log("ABC");
class Parent {
    constructor(name){
        console.log(`My name is ${name}`);
    }
    sayHello() {
        console.log("Say Hello");
    }
    info(){
        console.log("Information");
    }
}

class Child extends Parent{
    constructor(name, age){
        super(name);
        console.log(`Name ${name}, age ${age}`);
    }
    sayHello(){
        super.sayHello();
        console.log("Say Hello From Child");
    }
    info(){
        super.info();
        console.log("Infomation of Child Class");
    }
}

const c = new Child("Ali", 25);
c.sayHello();
c.info();