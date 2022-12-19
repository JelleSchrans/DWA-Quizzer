require('../models/questions');

const mongoose = require('mongoose');

const express = require('express');
const router = express.Router();

const Questions = mongoose.model('Question');

router.get("/", async (req, res) => {
    try {
        const questions = await Questions.find({});
        res.send(questions);
    } catch (error){
        console.log(error);
    }
});

module.exports = router;


