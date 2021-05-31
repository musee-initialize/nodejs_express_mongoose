const user = require('../model/user');
const User = require('../model/user');

const getAll = async () => {
    return await User.find({});
}

const create = async (body) => {
    return await User.create(body);
}

const getByAge = async (params) => {
    return await User.find({age : {$gt : params.age}});
}

module.exports = {
    getAll,
    create,
    getByAge
}