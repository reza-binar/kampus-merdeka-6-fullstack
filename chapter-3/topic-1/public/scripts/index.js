import students from "./students.js";

const studentCard = document.getElementById("student-card");

// Get students
async function getStudents() {
    const studentsData = await students.getStudents();
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
getStudents();
