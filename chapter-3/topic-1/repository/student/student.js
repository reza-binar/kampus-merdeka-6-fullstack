const students = require("../../data/students.json");

exports.getStudents = (name, city, province) => {
    let data = students.map((student) => student);

    data = data.filter((student) => {
        let filteredStatus = true;
        if (name) {
            filteredStatus =
                filteredStatus &&
                student.name.toLowerCase().includes(name?.toLowerCase());
        }
        if (city) {
            filteredStatus =
                filteredStatus &&
                student.address.city
                    .toLowerCase()
                    .includes(city?.toLowerCase());
        }
        if (province) {
            filteredStatus =
                filteredStatus &&
                student.address.province
                    .toLowerCase()
                    .includes(province?.toLowerCase());
        }

        return filteredStatus;
    });

    return data;
};
