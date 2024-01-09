const express = require("express");
const app = express();
const PORT = 8080;
const videoRoutes = require("./routes/videos");

// Enabling JSON to be posted in request.body
app.use(express.json());

// Creating middleware to allow static files to be served from the public folder
app.use('/', express.static('public'));

// Routes
app.use("/videos", videoRoutes);

// Listener
app.listen(PORT, () => console.log(`Listening on ${PORT}`));