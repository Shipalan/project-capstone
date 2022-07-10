require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const { createLog, recentLogs, history, deleteTrip } = require("./controller.js");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/log", createLog);
app.get("/api/recentLogs", recentLogs);
app.get("/api/history", history);
app.delete("/api/deleteTrip", deleteTrip)

//File paths-------------------------------------------------

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/home.html"));
});

app.get("/history", (req,res) => {
  res.sendFile(path.join(__dirname, "../client/history.html"))
})

app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/home.css"));
});

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/main.js"));
});

//Connection Port --------------------------------------------

const port = process.env.PORT || 5432;
app.listen(port, () => console.log(`Listening on port ${port}`));
