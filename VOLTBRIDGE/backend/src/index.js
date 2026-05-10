//VOLTBRIDGE /backend/src/index.js

require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const app     = express();
const PORT    = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use('/api/energy',  require('./routes/energy'));
app.use('/api/savings', require('./routes/savings'));
app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'VoltBridge API', time: new Date().toISOString() }));
app.listen(PORT, () => {
  console.log('VoltBridge backend running on http://localhost:' + PORT);
  console.log('Test: http://localhost:' + PORT + '/api/health');
  console.log('Live: http://localhost:' + PORT + '/api/energy/live');
});