const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://Drashti:admin123@cluster0.trk5mpt.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes setup
app.use(require("./routes/index"));

// Server configuration
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server started listening on port: ${PORT}`)
);
