class Parent {
    constructor(name){
        this.name = name;
        console.log(`Parent Name is ${Parent.capitalize(this.name)}`);
    }

    intro(){
        console.log("Parent Introduction");
        // console.log(this.name.charAt(2));
    }

    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, 4);
    }
}


const p = new Parent("asad");
Parent.capitalize();
p.intro();