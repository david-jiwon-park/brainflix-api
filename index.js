const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const videoRoutes = require("./routes/videos");
const cors = require("cors");

// Adding middleware to implement Cross Origin Resource Sharing (CORS)
const { CORS_ORIGIN } = process.env;

app.use(cors({ origin: CORS_ORIGIN }));

// Enabling JSON to be posted in request.body
app.use(express.json());

// Creating middleware to allow static files to be served from the public folder
app.use('/', express.static('public'));

// Routes
app.use("/videos", videoRoutes);

// Listener
app.listen(PORT, () => console.log(`Listening on ${PORT}`));