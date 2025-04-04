const express = require("express");
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "self_study"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Database Connected");
});

app.get("/", (req, res) => {
    res.send("Self-Study Website Backend Running");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
