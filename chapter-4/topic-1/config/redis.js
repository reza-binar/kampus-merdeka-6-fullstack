const { createClient } = require("redis");

const client = async () => {
    const connection = createClient({
        password: "nnbcdUTbAAplJuWTR2qFq5o87Yk4LZg9",
        socket: {
            host: "18.142.53.174",
            port: 15493,
        },
    });

    await connection.connect();
    return connection;
};

module.exports = client;
