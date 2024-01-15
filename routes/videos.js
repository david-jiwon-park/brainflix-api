const express = require("express");
const PORT = process.env.PORT || 8080;
const router = express.Router(); 
const fs = require("fs");
const uniqid = require("uniqid");

// Creating re-usable function to read the videos.json data file
function readData() {
    const videoData = fs.readFileSync("./data/videos.json");
    const parsedData = JSON.parse(videoData);
    return parsedData;
};

// GET /video endpoint to get limited details for all videos
router.get("/", (req, res) => {

    // Reading the data file and filtering for specific properties
    const data = readData();
    const filteredData = data.map(({ id, title, channel, image }) => ({ id, title, channel, image }));

    // Responding with filtered data
    res.json(filteredData);
});

// GET /video/:id endpoint that gets all the details for one video based on the requested ID
router.get("/:id", (req, res) => {

    // Reading the data file and finding the single video whose ID matches the requested ID
    const data = readData();
    const singleVideo = data.find((video) => video.id === req.params.id);

    //Returns an error message if the video ID does not exist
    if (!singleVideo) {
        return res.status(404).send("This video ID does not exist.")
    }

    // Responding with the single video
    res.json(singleVideo);
});

// POST endpoint to upload a video
router.post("/", (req, res) => {

    // Make a new video with a unique ID
    const newVideo = {
        id: uniqid(),
        title: req.body.title,
        channel: "My Channel",
        image: `http://localhost:${PORT}/images/default-thumbnail.jpeg`,
        description: req.body.description, 
        views: "2,000,000", 
        likes: "200,000", 
        duration: "3:00", 
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: Date.now(),
        comments: [], 
    };

    // Reading the current video array and add the new video to the array
    const data = readData();
    data.push(newVideo);

    // Writing the entire new videos array to the data file
    fs.writeFileSync("./data/videos.json", JSON.stringify(data));

    // Responding with the video that was uploaded
    res.status(201).json(newVideo);
});

// Exporting the router for use in index.js
module.exports = router;