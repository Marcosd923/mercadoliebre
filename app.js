const path = require("path");
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("el servidor anda bien");
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});
app.get("/registro", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});
