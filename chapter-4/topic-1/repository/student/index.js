const crypto = require("crypto");
const path = require("path");
const { classes, student } = require("../../models");
const { uploader } = require("../../helper/cloudinary");

exports.getStudents = async () => {
    const data = await student.findAll({
        include: {
            model: classes,
        },
    });
    return data;
};

exports.getStudent = async (id) => {
    const data = await student.findAll({
        where: {
            id,
        },
        include: {
            model: classes,
        },
    });
    if (data.length > 0) {
        return data[0];
    }

    throw new Error(`Student is not found!`);
};

exports.createStudent = async (payload) => {
    if (payload.photo) {
        // upload image to cloudinary
        const { photo } = payload;

        // make unique filename -> 213123128uasod9as8djas
        photo.publicId = crypto.randomBytes(16).toString("hex");

        // rename the file -> 213123128uasod9as8djas.jpg / 213123128uasod9as8djas.png
        photo.name = `${photo.publicId}${path.parse(photo.name).ext}`;

        // Process to upload image
        const imageUpload = await uploader(photo);
        payload.photo = imageUpload.secure_url;
    }

    const data = await student.create(payload);
    return data;
};

exports.updateStudent = async (id, payload) => {
    const data = await student.update(payload, {
        where: {
            id,
        },
    });
    return data;
};

exports.deleteStudent = async (id) => {
    const data = await student.destroy({ where: { id } });
    return null;
};
