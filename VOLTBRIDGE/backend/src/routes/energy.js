//VOLTBRIDGE/baclend/src/routes/energy.js

const express = require('express');
const router = express.Router();
const mock = require('../services/mock');

router.get('/live', (req, res) => {
  res.json({ success: true, data: mock.getLiveEnergy() });
});

router.get('/history', (req, res) => {
  const hours = parseInt(req.query.hours) || 24;
  res.json({ success: true, data: mock.getHistory(hours) });
});

module.exports = router;