const { classes, student } = require("../../models");
const redis = require("../../config/redis");

exports.getClasses = async () => {
    const data = await classes.findAll({
        include: {
            model: student,
        },
    });
    return data;
};

exports.getClass = async (id) => {
    let redisClient, data;
    const key = `classes:${id}`;
    try {
        // check redis and if there are any data return data from redis
        redisClient = await redis();
        let dataString = await redisClient.get(key);
        if (dataString) {
            data = JSON.parse(dataString); // need to be parsed because data in redis is string, so we will convert from string to js object/array
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
            dataString = JSON.stringify(data[0]); // need to be stringify because redis save the data in string, so we have convert it to string
            await redisClient.set(key, dataString, {
                EX: 300,
            });

            return data[0];
        }

        throw new Error(`Class is not found!`);
    } finally {
        await redisClient.disconnect(); // finally is always run after the function has been executed, so in this way we will disconnect the redis after this function executed
    }
};

exports.createClass = async (payload) => {
    let redisClient, data;
    try {
        // Create data to postgres
        data = await classes.create(payload);

        // Save to redis (cache)
        const key = `classes:${data.id}`;
        redisClient = await redis();
        const dataString = JSON.stringify(data);
        await redisClient.set(key, dataString, {
            EX: 300,
        });

        return data;
    } finally {
        await redisClient.disconnect();
    }
};

exports.updateClass = async (id, payload) => {
    let redisClient, data;
    const key = `classes:${id}`;
    try {
        // update data to postgres
        await classes.update(payload, {
            where: {
                id,
            },
        });

        // get data from postgres
        data = await classes.findAll({
            where: {
                id,
            },
            include: {
                model: student,
            },
        });
        if (data.length > 0) {
            // save to redis (cache)
            redisClient = await redis();
            const dataString = JSON.stringify(data[0]);
            await redisClient.set(key, dataString, {
                EX: 300,
            });

            return data[0];
        }

        throw new Error(`Class is not found!`);
    } finally {
        await redisClient.disconnect();
    }
};

exports.deleteClass = async (id) => {
    let redisClient, data;
    const key = `classes:${id}`;
    try {
        // delete from postgres
        data = await classes.destroy({ where: { id } });

        // delete from redis
        redisClient = await redis();
        await redisClient.del(key);

        return null;
    } finally {
        await redisClient.disconnect();
    }
};
