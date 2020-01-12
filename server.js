const express = require("express");

const PORT = 8081;
const HOST = '0.0.0.0';

const app = express();

app.get("/", (req, res) => {
    console.log(`Request received; start handling it: \n`);
    res.send("Hello from Node.js app \n");
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});