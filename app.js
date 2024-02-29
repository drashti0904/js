const express = require("express");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://Drashti:admin123@cluster0.trk5mpt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

const alienRouter = require("./routes/aliens.js");
app.use("/aliens", alienRouter);

app.listen(3000, () => {
  console.log("server started");
});
