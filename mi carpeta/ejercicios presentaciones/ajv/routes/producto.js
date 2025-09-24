const express = require("express");
const fs = require("fs");
const Ajv = require("ajv");
const ajvFormats = require("ajv-formats");

const router = express.Router();
const ajv = new Ajv();
ajvFormats(ajv);

// Cargar esquema de producto
const productSchema = JSON.parse(fs.readFileSync("./schemas/producto.json", "utf-8"));
const validate = ajv.compile(productSchema);

router.post("/", (req, res) => {
  console.log("ENTRA / PRODUCTO");
  const isValid = validate(req.body);

  if (!isValid) {
    return res.status(400).json({ error: "400 - Producto inválido", details: validate.errors });
  }

  res.status(200).json({ message: "200 - Producto válido" });
});

module.exports = router;
