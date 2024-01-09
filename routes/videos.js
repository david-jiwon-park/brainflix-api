const express = require("express");
const router = express.Router(); // To use router, instantiate it like this
const fs = require("fs");
const uniqid = require("uniqid");


router.get("/", (_req, res) => {
    res.send("Welcome to the Videos Page!")
});








module.exports = router;