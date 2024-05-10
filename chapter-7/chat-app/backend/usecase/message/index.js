const messageRepo = require("../../repository/message");

exports.getMessages = async () => {
    const data = await messageRepo.getMessages();
    return data;
};

exports.createMessage = async (payload) => {
    const data = await messageRepo.createMessage(payload);
    return data;
};
