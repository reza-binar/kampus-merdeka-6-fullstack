/* In javascript, to import the file we need to require the file, then the file that has been imported it can be accessed in the below code */
import studentsData from "./data/students.json" assert { type: "json" };

/* 
    Actually class has been not used massively after more JS framework use functional based component especially on frontend side
    Class is more not friendly for new developer, and the functional based is more easier that class based
*/
class Student {
    /* When this function called, it would get all of the students data and can be consumed in the frontend view */
    getAllStudents() {
        return studentsData;
    }

    /* When this function called, it would search students based on his/her name, city, or province he/she lived and then it will return the result searched data */
    searchStudents(search) {
        const searchedStudents = studentsData.filter(
            (student) =>
                student.name.toLowerCase().includes(search.toLowerCase()) ||
                student.address.city
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                student.address.province
                    .toLowerCase()
                    .includes(search.toLowerCase())
        );
        return searchedStudents;
    }
}

export default new Student();
