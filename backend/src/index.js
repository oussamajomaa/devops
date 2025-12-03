// backend/src/index.js
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/users', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, name, email, created_at FROM users'
    );
    res.json(rows);
  } catch (err) {
    console.error('Erreur lors de la récupération des utilisateurs :', err);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Backend démarré sur le port ${port}`);
});
