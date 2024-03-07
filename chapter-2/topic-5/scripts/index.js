const students = [
    {
        name: "Nida",
        address: {
            city: "Jakarta",
            province: "DKI Jakarta",
        },
    },
    {
        name: "Dwi",
        address: {
            city: "Tangerang",
            province: "Banten",
        },
    },
    {
        name: "Feb",
        address: {
            city: "Tangerang",
            province: "Banten",
        },
    },
    {
        name: "Hukma",
        address: {
            city: "Bandung",
            province: "Jawa Barat",
        },
    },
    {
        name: "Fauzan",
        address: {
            city: "Bandung",
            province: "Jawa Barat",
        },
    },
    {
        name: "Shahrizan",
        address: {
            city: "Palembang",
            province: "Sumatera Selatan",
        },
    },
];

/* 
    We are not clone
    If you change some value in studentsData it will effect the students variable
*/
// let studentsData = students;
// studentsData.sort((a, b) => {
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();
//     if (nameA < nameB) {
//         return -1;
//     }
//     if (nameA > nameB) {
//         return 1;
//     }

//     return 0;
// });
// console.log("studentsData", studentsData);
// console.log("students", students);

/* 
    We are clone data
    If you change some value in cloneStudents it will not effect the students variable
*/
const cloneStudents = [...students];
cloneStudents.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    return 0;
});
console.log("cloneStudents", cloneStudents);
console.log("students", students);
