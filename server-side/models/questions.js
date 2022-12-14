const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
});

const Questions = mongoose.model('Question', questionSchema);
module.exports = Questions.schema;