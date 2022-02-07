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
  // si la base de datos no response, va a mi catch y me tira null y el length porque la tabla de la base esta vacia
  if (types == null || types.length == 0) {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/type");

      let apiTypes = response.data.results.map((e) => e.name);

      const t = apiTypes.map((type) =>
        Type.findOrCreate({ where: { name: type } })
      );

      Promise.all(t)
        .then((r) => Type.findAll())
        .then((r) => res.status(200).send(r));
      console.log("de la api");
    } catch (error) {
      res.status(404).send(error.message, "error en get Types");
    }
  } else {
    res.status(200).send(types);
    console.log("de la db");
  }
});

module.exports = router;
