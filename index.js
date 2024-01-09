const express = require("express");
const app = express();
const PORT = 8080;
const videoRoutes = require("./routes/videos");

app.use(express.json());

app.use('/', express.static('public'));

app.use("/videos", videoRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to my page!');
});


app.listen(PORT, () => console.log(`Listening on ${PORT}`));