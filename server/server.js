require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const { createLog, recentLogs, history, deleteTrip, createOilChangeLog, oilChangeHistory } = require("./controller.js");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/log", createLog);
app.post("/api/oilChangeLog", createOilChangeLog);
app.get("/api/recentLogs", recentLogs);
app.get("/api/history", history);
app.get("/api/oilChangeHistory", oilChangeHistory);
app.delete("/api/deleteTrip", deleteTrip)

//File paths-------------------------------------------------

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/home.html"));
});

app.get("/history", (req,res) => {
  res.sendFile(path.join(__dirname, "../client/history.html"))
})

app.get("/oilChangeHistory", (req,res) => {
  res.sendFile(path.join(__dirname, "../client/oilChangeHistory.html"))
})

app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/home.css"));
});

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/main.js"));
});

app.get("/ocjs", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/oilChangeHistory.js"));
});

//Connection Port --------------------------------------------

const port = process.env.PORT || 5432;
app.listen(port, () => console.log(`Listening on port ${port}`));
