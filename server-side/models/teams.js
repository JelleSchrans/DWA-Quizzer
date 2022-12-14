const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for Teams
let teamSchema = new Schema({
    teamName: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0,
    },
    answer: {
        type: String,
        default: ""      
    }
});

const Teams = mongoose.model('Teams', teamSchema);
module.exports = Teams.schema;