const { Router } = require("express");
const axios = require("axios");
const { Type } = require("../db.js");

const router = Router();

router.get("/", async (req, res) => {
  let types;
  try {
    types = await Type.findAll();
  } catch (e) {
    e.message;
  }

  res.status(200).send(types);
  //console.log("de la db");
});

module.exports = router;
