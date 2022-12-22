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

router.get("/:roomCode", async (req, res) => {
    try {
        const quizroom = await Quizrooms.findOne({roomCode: req.params.roomCode});
        res.send(quizroom);
    } catch (error) {
        console.log(error);
    }
})

router.post("/newRoom", async (req, res) => {
    try {
        const newRoom = req.body;
        req.session.roomCode = newRoom.roomCode;

        const quizroom = Quizrooms.create(newRoom);
        await quizroom.save();

        res.send(quizroom);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;