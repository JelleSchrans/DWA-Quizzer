const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for Teams
let Teams = new Schema({
    roomID: {
        type: String,
        required: true
    },
    teamName: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Teams', Teams);