const express = require("express");
const fs = require("fs");
const Ajv = require("ajv");
const ajvFormats = require("ajv-formats");

const router = express.Router();
const ajv = new Ajv();
ajvFormats(ajv);

// Cargar esquema de usuario
const userSchema = JSON.parse(fs.readFileSync("./schemas/usuario.json", "utf-8"));
const validate = ajv.compile(userSchema);

router.post("/", (req, res) => {
  const isValid = validate(req.body);

  if (!isValid) {
    return res.status(400).json({ error: "400 - Usuario inválido", details: validate.errors });
  }

  res.status(200).json({ message: "200 - Usuario válido" });
});

module.exports = router;
