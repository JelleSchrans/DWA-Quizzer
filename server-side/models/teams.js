const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for Teams
let teamSchema = new Schema({
    roomID: {
        type: String,
        required: true
    },
    teamName: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0,
        required: true
    },
});

const Teams = mongoose.model('Teams', teamSchema);
module.exports = Teams.schema;