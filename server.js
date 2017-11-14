const express = require('express');

app = express();

app.get("/", (req, res, next) => {
    res.send("Welcome to johnwood.io");
})

app.listen(80);
