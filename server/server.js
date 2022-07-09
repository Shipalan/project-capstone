require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
// const  SERVER_PORT  = process.env.PORT || 5432;

const { createLog } = require("./controller.js");

const app = express();
app.use(express.json())
app.use(cors());

app.post("/api/log", createLog);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/home.html"));
});

app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/home.css"));
});

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/main.js"));
});

// const port = process.env.PORT || 5432;

// app.listen(SERVER_PORT, () => {
//   console.log(`Listening on port ${SERVER_PORT}`);
// });

const port = process.env.PORT || 5432;
app.listen(port, () => console.log(`Listening on port ${port}`));
