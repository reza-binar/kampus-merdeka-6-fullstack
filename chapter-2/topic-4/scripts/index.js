import students from "./students.js";

// DOM (Document Object Modeling)
/* 
    After 5 seconds the Navbar text will be change "ahahaha" and <div> with id "student card" the content will be replaced to "<h1>Wah berubah!</h1>" because DOM can modify the html file
*/
const studentCard = document.getElementById("student-card");
const navbarBrand = document.getElementsByClassName("navbar-brand");
const searchSubmit = document.getElementById("search-submit");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort");

studentCard.innerHTML = "<h1>Loading...</h1>";

setTimeout(() => {
    const allStudents = students.getAllStudents();
    let studentCardWithAllStudents = "";
    allStudents.map((student) => {
        studentCardWithAllStudents += `<div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${student.name}</h5>
                            <p class="card-text">${student.address.city}, ${student.address.province}</p>
                        </div>
                    </div>
                </div>`;
    });
    studentCard.innerHTML = studentCardWithAllStudents;
    navbarBrand[0].innerHTML = "ahahaha";
}, 2000);

/* 
    This code will be get the searching submit form html component and than we can modify, what happen when it submitted or anything
    In this case we will just add the alert that the submit has been triggered
*/
searchSubmit.addEventListener("submit", (event) => {
    event.preventDefault();

    // reset the select option
    sortSelect.selectedIndex = 0;

    // make a loading
    studentCard.innerHTML = "<h1>Loading...</h1>";

    // search data
    const searchedStudents = students.searchStudents(searchInput.value);
    let studentCardWithStudentsData = "";
    searchedStudents.map((student) => {
        studentCardWithStudentsData += `<div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${student.name}</h5>
                            <p class="card-text">${student.address.city}, ${student.address.province}</p>
                        </div>
                    </div>
                </div>`;
    });
    studentCard.innerHTML = studentCardWithStudentsData;
});

// Sort select
sortSelect.addEventListener("change", (event) => {
    event.preventDefault();

    // Get students data
    let studentsData = [...students.searchStudents(searchInput.value)];

    // Logic to ascending or descending the data
    const selectedSort = event.target.value;
    if (selectedSort == "ascending") {
        studentsData = studentsData.sort((a, b) => {
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
    } else if (selectedSort == "descending") {
        studentsData = studentsData.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }

            return 0;
        });
    }

    // Make html content that will be displayed
    let studentCardWithStudentsData = "";
    studentsData.map((student) => {
        studentCardWithStudentsData += `<div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${student.name}</h5>
                            <p class="card-text">${student.address.city}, ${student.address.province}</p>
                        </div>
                    </div>
                </div>`;
    });
    studentCard.innerHTML = studentCardWithStudentsData;
});
