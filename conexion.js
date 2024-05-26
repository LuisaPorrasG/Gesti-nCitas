// Importa las dependencias necesarias
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

// Crea una instancia de Express
const app = express();

// Configura la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "usuario",
  password: "contraseña",
  database: "nombre_de_tu_base_de_datos",
});

// Conecta a la base de datos MySQL
db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
  } else {
    console.log("Conexión a la base de datos exitosa");
  }
});

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());

// Ruta para registrar un nuevo paciente
app.post("/registrar-paciente", (req, res) => {
  const paciente = req.body;
  const sql = "INSERT INTO pacientes SET ?";

  db.query(sql, paciente, (err, result) => {
    if (err) {
      console.error("Error al registrar paciente:", err);
      res.status(500).send("Error al registrar paciente");
    } else {
      console.log("Paciente registrado exitosamente");
      res.sendStatus(200);
    }
  });
});

// Ruta para agendar una cita
app.post("/agendar-cita", (req, res) => {
  const cita = req.body;
  const sql = "INSERT INTO citas SET ?";

  db.query(sql, cita, (err, result) => {
    if (err) {
      console.error("Error al agendar cita:", err);
      res.status(500).send("Error al agendar cita");
    } else {
      console.log("Cita agendada exitosamente");
      res.sendStatus(200);
    }
  });
});

// Ruta para administrar una cita
app.post("/administrar-cita", (req, res) => {
  const { citaId, confirmada } = req.body;
  const sql = "UPDATE citas SET confirmada = ? WHERE id = ?";

  db.query(sql, [confirmada, citaId], (err, result) => {
    if (err) {
      console.error("Error al administrar cita:", err);
      res.status(500).send("Error al administrar cita");
    } else {
      console.log("Cita administrada exitosamente");
      res.sendStatus(200);
    }
  });
});

// Ruta para eliminar una cita
app.post("/eliminar-cita", (req, res) => {
  const citaId = req.body.citaId;
  const sql = "DELETE FROM citas WHERE id = ?";

  db.query(sql, citaId, (err, result) => {
    if (err) {
      console.error("Error al eliminar cita:", err);
      res.status(500).send("Error al eliminar cita");
    } else {
      console.log("Cita eliminada exitosamente");
      res.sendStatus(200);
    }
  });
});

// Establece el puerto en el que el servidor escuchará las solicitudes
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
