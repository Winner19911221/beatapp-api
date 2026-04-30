try {
  require('dotenv').config();
} catch (e) {}

const express = require('express');
const app = express();

// ⚠️ CLAVE: usar puerto dinámico SIEMPRE
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

// ⚠️ CLAVE para Railway
app.listen(PORT, '0.0.0.0', () => {
  console.log('Servidor corriendo en puerto ' + PORT);
});