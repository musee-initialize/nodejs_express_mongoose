const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const User = new Schema( {
    name: {type: String, required: true},
    age: {type: Number}
})

module.exports = mongoose.model("Users", User);