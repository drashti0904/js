const express = require("express");
const router = express.Router();
const Alien = require("../models/alien");

router.get("/", async (req, res) => {
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (err) {
    res.send("err" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    res.json(alien); // Corrected variable name from aliens to alien
  } catch (err) {
    res.send("err" + err);
  }
});

router.post("/", async (req, res) => {
  const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech, // Corrected type in req.body.tech
    sub: req.body.sub,
  });
  try {
    const a1 = await alien.save();
    res.json(a1); // Corrected variable name from al to a1 and res.jason to res.json
  } catch (err) {
    res.send("error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    alien.sub = req.body.sub;
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedAlien = await Alien.findByIdAndDelete(req.params.id);
    res.json(deletedAlien); // Respond with the deleted alien document
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
});

module.exports = router;
