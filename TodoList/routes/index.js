const express = require("express");
const router = express.Router();

//routes will be here...
router.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

// router.get("/index", (req, res) => {
//   return res.status(200).json({
//     message: "Welcome to my Page",
//   });
// });

module.exports = router;
