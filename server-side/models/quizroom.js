const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for Quizrooms
let Quizrooms = new Schema({
    roomID: {
        type: String,
        required: true
    },
    roomName: {
        type: String,
        required: true
    },
    roomCode: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Quizrooms', Quizrooms);