
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;
const indexPath = path.join(__dirname, "index.html");

app.get("/", (req, res) => {
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("No se encontró index.html:", err.message);
      if (!res.headersSent) {
        res.status(500).send(
          "Falta index.html. Revisa los archivos del repositorio."
        );
      }
    }
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor iniciado en el puerto " + PORT);
});
