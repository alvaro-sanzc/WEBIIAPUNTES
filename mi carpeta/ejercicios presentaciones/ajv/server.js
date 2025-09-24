const express = require("express");
const userRoutes = require("./routes/usuario");
const productRoutes = require("./routes/producto");

const app = express();
app.use(express.json());

app.use("/ajv/usuarios", userRoutes);
app.use("/ajv/productos", productRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(400).json({ error: "Invalid request" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
