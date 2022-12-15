const path = require("path");
const express = require("express");
const app = express();

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("el servidor anda bien" + port);
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});
app.get("/registro", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});
