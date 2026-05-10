//VOLTBRIDGE/baclend/src/routes/energy.js

const router = require('express').Router();
const mock   = require('../services/mock');
router.get('/live',     (_req, res) => res.json({ success: true, data: mock.getLiveEnergy() }));
router.get('/history',  (req,  res) => res.json({ success: true, data: mock.getHistory(parseInt(req.query.hours) || 24) }));
module.exports = router;