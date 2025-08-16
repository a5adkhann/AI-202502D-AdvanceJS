const form = document.getElementById("form");
const inputField = document.getElementById("inputField");
const btn = document.getElementById("btn");
const lists = document.getElementsByClassName("lists")[0];

let todoArr = [];


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = new Todo(inputField.value);
    console.log(todo);

    todoArr = [...todoArr, todo];
    console.log(todoArr);
})

class Todo {
    constructor(name){
        this.name = name;
    }
}
