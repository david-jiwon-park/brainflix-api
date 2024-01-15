const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const videoRoutes = require("./routes/videos");
const cors = require("cors");

// Middleware to implement Cross Origin Resource Sharing (CORS)
app.use(cors());

// Enables JSON to be posted in request.body
app.use(express.json());

// Middleware to allow static files to be served from the public folder
app.use('/', express.static('public'));

// Middleware that returns an error message if any POST request is not a JSON header
app.use((req, res, next) => {
    if (req.method === "POST" && req.headers["content-type"] !== "application/json") {
        return res.status(400).send("Please ensure a proper JSON is provided.");
    }

    next();
});

// Routes
app.use("/videos", videoRoutes);

// Listener
app.listen(PORT, () => console.log(`Listening on ${PORT}`));