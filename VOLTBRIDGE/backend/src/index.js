//VOLTBRIDGE /backend/src/index.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const energyRoutes = require('./routes/energy');
const savingsRoutes = require('./routes/savings');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api/energy', energyRoutes);
app.use('/api/savings', savingsRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'VoltBridge API' });
});

app.listen(PORT, () => {
  console.log(`VoltBridge backend on http://localhost:${PORT}`);
  console.log(`Test: http://localhost:${PORT}/api/energy/live`);
});