require('../models/quizroom');

const mongoose = require('mongoose');

const express = require('express');
const router = express.Router();

const Quizroom = mongoose.model('Quizrooms');
const Team = mongoose.model('Teams');

const { broadCastToAll, broadCastToClient } = require('../websocketServer');

router.get("/", async (req, res) => {
    try {
        const quizrooms = await Quizroom.find({});
        res.send(quizrooms);
    } catch (error) {
        console.log(error);
    }
})

router.get("/currentRoom", async (req, res) => {
    console.log("Current room: ", req.session.roomCode)
    try {
        const quizroom = await Quizroom.findOne({roomCode: req.session.roomCode});
        res.send(quizroom);
    } catch (error) {
        console.log(error);
    }
});

router.post("/newRoom", async (req, res) => {
    try {
        const roomcode = (Math.random() + 1).toString(36).substring(7); // Generate a random room code;
        req.session.roomCode = roomcode;

        const quizroom = await new Quizroom({roomCode: roomcode})
        await quizroom.save();

        console.log("New room: ", req.session.roomCode);

        res.status(200).send(quizroom);
    } catch (error) {
        console.log(error);
    }
})

router.post("/:roomCode/teams/:teamName/request", async (req, res) => {
    const roomcode = req.params.roomCode;
    const teamname = req.params.teamName;

    console.log("Body", req.body);

    try {
        const roomToRequest = await Quizroom.findOne({roomCode: roomcode});
        const teamRequest = new Team({teamName: teamname});

        roomToRequest.teamRequests.push(teamRequest);
        await roomToRequest.save();

        res.send({ message: "Team request sent" });
    } catch(error) {
        console.log(error);
        res.send({message: "Can't find this room"});
    }
});

router.post("/teams/accept", async (req, res) => {
    const selectedTeam = req.body.teamName;

    try {
        const roomToJoin = await Quizroom.findOne({roomCode: req.session.roomCode});

        roomToJoin.teams.push(selectedTeam);
        await roomToJoin.save();
    } catch(error) {

    }
});

router.delete("/teams/reject", (req, res) => {
    const selectedTeam = req.body.teamName;

    try {

    } catch(error) {

    }
})

module.exports = router;