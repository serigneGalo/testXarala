const mongoose = require("mongoose")
const { isEmail } = require("validator")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type: String,
        required: true
    },

    mail : {
        type: String,
        required: true,
        validate: [ isEmail, 'invalid email' ]
    },

    statut : {
        type: Boolean,
        required: true
    },

    location : {
        type: String,
        required: true
    },

    phone : {
        type: Number,
        required: true,
        min: 3
    }
})

module.exports = mongoose.model('user', userSchema);