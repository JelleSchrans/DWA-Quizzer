require('../models/teams')

const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();

const Teams = mongoose.model('Teams');

router.get("/", async (req, res) => {
    try {
        const teams = await Teams.find({});
        res.send(teams);
    } catch (error) {
        console.log(error);
    }
});

router.get("/:teamName", async (req, res) => {
    try {
        const team = await Teams.findOne({teamName: req.params.teamName});
        res.send(team);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;