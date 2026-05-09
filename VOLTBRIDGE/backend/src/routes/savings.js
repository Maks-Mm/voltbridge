//VOLTBRIDGE/backend/src/routes/savings.js


const express = require('express');
const router = express.Router();
const mock = require('../services/mock');

router.get('/', (req, res) => {
  const days = parseInt(req.query.days) || 30;
  res.json({ success: true, data: mock.getSavings(days) });
});

module.exports = router;