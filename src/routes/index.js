const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let result = await db.all();
    res.json(result);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let result = await db.findOne(req.params.id);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

router.post("/create", async (req, res) => {
  try {
    await db.create(req.body);
    res.json({ message: "created", status: true });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

module.exports = router;
