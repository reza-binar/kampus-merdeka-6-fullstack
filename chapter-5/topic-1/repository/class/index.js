const { classes, student } = require("../../models");
const { getData, setData, deleteData } = require("../../helper/redis");

exports.getClasses = async () => {
    const data = await classes.findAll({
        include: {
            model: student,
        },
    });
    return data;
};

exports.getClass = async (id) => {
    const key = `classes:${id}`;

    // check redis and if there are any data return data from redis
    let data = await getData(key);
    if (data) {
        return data;
    }

    // if in the redis not found, we will get from database (postgres) and then save it to redis
    data = await classes.findAll({
        where: {
            id,
        },
        include: {
            model: student,
        },
    });
    if (data.length > 0) {
        // save in the redis if in the postgres is found
        await setData(key, data[0], 300);

        return data[0];
    }

    throw new Error(`Class is not found!`);
};

exports.createClass = async (payload) => {
    // Create data to postgres
    const data = await classes.create(payload);

    // Save to redis (cache)
    const key = `classes:${data.id}`;
    await setData(key, data, 300);

    return data;
};

exports.updateClass = async (id, payload) => {
    const key = `classes:${id}`;

    // update data to postgres
    await classes.update(payload, {
        where: {
            id,
        },
    });

    // get data from postgres
    const data = await classes.findAll({
        where: {
            id,
        },
        include: {
            model: student,
        },
    });
    if (data.length > 0) {
        // save to redis (cache)
        await setData(key, data[0], 300);

        return data[0];
    }

    throw new Error(`Class is not found!`);
};

exports.deleteClass = async (id) => {
    const key = `classes:${id}`;

    // delete from postgres
    await classes.destroy({ where: { id } });

    // delete from redis
    await deleteData(key);

    return null;
};
