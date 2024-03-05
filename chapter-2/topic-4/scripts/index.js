import students from "./students.js";

const studentCard = document.getElementById("student-card");
studentCard.innerHTML = "<h1>Wah berubah!</h1>";

console.log(students.getAllStudents());
