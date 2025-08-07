class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        alert(`Username is ${this.name} and id is ${this.id}`);
        // console.log("Constructor is called...");
    }
    userDetail(email) {
        this.email = email;
        alert(`User email is ${this.email}`);
    }
}

const user1 = new User("Ali", 20);
const user2 = new User("Ahmed", 25);
const user3 = new User("Hassan", 30);

user1.userDetail("ali@gmail.com");

// user1.userDetail("Ali", 20);
// user2.userDetail("Ahmed", 25);
// user3.userDetail("Hassan", 30);