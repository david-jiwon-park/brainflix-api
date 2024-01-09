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


router.get("/:id", (req, res) => {
    const data = readData();
    const singleVideo = data.find((video) => video.id === req.params.id);
    res.json(singleVideo);
});

router.post("/", (req, res) => {
    const newVideo = {
        id: uniqid(),
        title: req.body.title,
        channel: "My Channel",
        image: 'http://localhost:8080/images/default-thumbnail.jpeg',
        description: req.body.description, 
        views: "2,000,000", 
        likes: "200,000", 
        duration: "3:00", 
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: Date.now(),
        comments: [], 
    };

    const data = readData();
    data.push(newVideo);
    fs.writeFileSync("./data/videos.json", JSON.stringify(data));

    // Respond with the note that was created
    res.status(201).json(newVideo);

})





module.exports = router;