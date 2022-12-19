require('../models/quizroom');

const mongoose = require('mongoose');

const express = require('express');
const router = express.Router();

const Quizrooms = mongoose.model('Quizrooms');

router.get("/", async (req, res) => {
    try {
        const quizrooms = await Quizrooms.find({});
        res.send(quizrooms);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;