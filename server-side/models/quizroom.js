const mongoose = require('mongoose');
const Teams = require('./teams');
const Schema = mongoose.Schema;

//Define collection and schema for Quizrooms
let quizroomSchema = new Schema({
    roomCode: {
        type: String,
        required: true
    },
    teams: {
        type: [Teams],
        validate: [teamsLimit, '{PATH} exceeds the limit of 6']   
    },
    currentQuestion: {
        type: String,
        required: true
    },
    quizStarted: {
        type: Boolean,
        required: true,
        default: false
    },
    quizEnded: {
        type: Boolean,
        required: true,
        default: false
    },
});

function teamsLimit(val) {
    return val.length <= 6;
}

const Rooms = mongoose.model('Quizrooms', quizroomSchema);
module.exports = Rooms.schema;