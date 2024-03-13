import students from "./students.js";

const studentCard = document.getElementById("student-card");
const searchInput = document.getElementById("search-input");
const searchSubmit = document.getElementById("search-submit");

// Get students
async function getStudents(name) {
    const studentsData = await students.getStudentsData(name);
    let studensDataInCards = "";
    studentsData.map((student) => {
        studensDataInCards += `<div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${student.name}</h5>
                            <p class="card-text">${student.address.city}, ${student.address.province}</p>
                        </div>
                    </div>
                </div>`;
    });
    studentCard.innerHTML = studensDataInCards;
}

searchSubmit.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = searchInput.value;
    getStudents(name);
});

getStudents("");
