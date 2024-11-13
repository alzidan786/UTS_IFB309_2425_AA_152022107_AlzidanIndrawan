// app.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());
app.use(cors());

// Endpoint untuk mendapatkan data JSON
app.get('/api/data', (req, res) => {
  const data = {
    "sensor": {
      "temperature": 25.3,
      "humidity": 60.2,
      "pH": 7.0
    },
    "actuator": {
      "pumpStatus": true
    }
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});