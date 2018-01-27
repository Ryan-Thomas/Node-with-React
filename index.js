const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.port || 5000;
console.log("Binding to port: " + PORT);
app.listen(PORT);
