const mongoose = require('mongoose');
const Teams = require('./teams');
const Schema = mongoose.Schema;

//Define collection and schema for Quizrooms
let quizroomSchema = new Schema({
    roomName: {
        type: String,
        required: true
    },
    roomCode: {
        type: String,
        required: true
    },
    teams: {
        type: [Teams],
        required: true,
        validate: [teamsLimit, '{PATH} exceeds the limit of 6']   
    },
    currentQuestion: {
        type: String,
        required: true
    },
});

function teamsLimit(val) {
    return val.length <= 6;
}

quizroomSchema.methods.addTeam = function(team) {
    this.teams.push(team);
    return this.save();
}

const Rooms = mongoose.model('Quizrooms', quizroomSchema);
module.exports = Rooms.schema;