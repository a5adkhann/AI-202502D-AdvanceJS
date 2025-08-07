class Person{
    constructor(n, a){
        this.name = n;
        this.age = a;
        console.log(`Name is ${this.name} & age ${this.age}`);
    }

    greet() {
        alert("Greet Method");
    }
}

class Student extends Person{
    sayPresent() {
        console.log("Say Present");
    }
}

class Employee extends Student{
    
}

const student1 = new Student("Huzaifa", 21);
const employee1 = new Employee();
student1.greet();
employee1.sayPresent();
// student1.sayPresent();




// const person1 = new Person("Ali", 19);
// person1.greet();