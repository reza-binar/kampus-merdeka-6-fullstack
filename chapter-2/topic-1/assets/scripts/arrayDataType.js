const studentNames = ["Nida", "Dwi", "Hukma"];
studentNames.push("Feb");
studentNames.push("Fauzan");

console.log(studentNames[0]); // Nida
console.log(studentNames[4]); // Fauzan
console.log(studentNames[10]); // undefined

studentNames.map((student, index) => {
    console.log(`The student in table ${index} is ${student}`);
});
