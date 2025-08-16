// console.log("Map")

// console.log(courses);

// for(let i = 0; i<=2; i++){
//     console.log(courses[i]);
//     document.getElementById("data").innerHTML = courses[i];
// }

const courses = ["HTML", "PHP", "Python"];


courses.map((c, i) => {
    document.write(c+" <br> ");
});