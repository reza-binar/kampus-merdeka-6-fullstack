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
    Please make an console.log that display every student information
    Example: 
    Nida is from Jakarta, DKI Jakarta
    Dwi is from Tangerang, Banten
    ....
*/

// With map
const search = "i";
students.map((student) => {
    if (
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.address.city.toLowerCase().includes(search.toLowerCase()) ||
        student.address.province.toLowerCase().includes(search.toLowerCase())
    ) {
        console.log(
            `${student.name} is from ${student.address.city}, ${student.address.province}`
        );
    }
});

// With filter
// const filteredStudents = students.filter(
//     (student) =>
//         student.name.toLowerCase().includes(search.toLowerCase()) ||
//         student.address.city.toLowerCase().includes(search.toLowerCase()) ||
//         student.address.province.toLowerCase().includes(search.toLowerCase())
// );
// filteredStudents.map((student) =>
//     console.log(
//         `${student.name} is from ${student.address.city}, ${student.address.province}`
//     )
// );

// With for
// for (let index = 0; index < students.length; index++) {
//     const student = students[index];
//     console.log(
//         `${student.name} is from ${student.address.city}, ${student.address.province}`
//     );
// }
