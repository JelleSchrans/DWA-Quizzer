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
    const quizroom = await Quizroom.findOne({roomCode: req.session.roomCode});

    if (quizroom) {
        res.send(quizroom);
    } else {
        res.status(404).send({ error: "No room found" });
    }
});

router.post("/newRoom", async (req, res) => {
        const roomcode = (Math.random() + 1).toString(36).substring(7); // Generate a random room code;
        req.session.roomCode = roomcode;
        req.session.role = "quizmaster";

        const quizroom = await new Quizroom({roomCode: roomcode})
        await quizroom.save();

        res.status(200).send(quizroom);   
})

router.post("/:roomCode/teams/:teamName/request", async (req, res) => {
    const roomcode = req.params.roomCode;
    const teamname = req.params.teamName;

    const roomToRequest = await Quizroom.findOne({roomCode: roomcode});

    if(roomToRequest){
        const teamRequest = new Team({teamName: teamname});

        roomToRequest.teamRequests.push(teamRequest);
        await roomToRequest.save();

        res.send({ message: "Team request sent" });
    } else {
        res.send({ message: "Can't find this room"});
    }    
});

router.post("/teams/accept", async (req, res) => {
    const selectedTeam = req.body.teamName;

    try {
        const roomToJoin = await Quizroom.findOne({roomCode: req.session.roomCode});

        roomToJoin.teams.push(selectedTeam);
        roomToJoin.teamRequests = roomToJoin.teamRequests.filter(team => team.teamName !== selectedTeam);
        await roomToJoin.save();
    } catch(error) {
        console.log(error);
    }
});

router.delete("/teams/reject", async (req, res) => {
    const selectedTeam = req.body.teamName;

    try {
        const roomToJoin = await Quizroom.findOne({roomCode: req.session.roomCode});

        roomToJoin.teamRequests = roomToJoin.teamRequests.filter(team => team.teamName !== selectedTeam);
        await roomToJoin.save();
    } catch(error) {
        console.log(error);
    }
})

module.exports = router;