const express = require("express");
const router = express.Router(); // To use router, instantiate it like this
const fs = require("fs");
const uniqid = require("uniqid");

function readData() {
    const videoData = fs.readFileSync("./data/videos.json");
    const parsedData = JSON.parse(videoData);
    return parsedData;
}


router.get("/", (req, res) => {
    const data = readData();
    const filteredData = data.map(({ id, title, channel, image }) => ({ id, title, channel, image }));
    res.json(filteredData);
});








module.exports = router;