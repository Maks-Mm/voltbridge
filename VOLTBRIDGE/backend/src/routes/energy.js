//VOLTBRIDGE/baclend/src/routes/energy.js

import express from 'express'
import { getLiveEnergyData, getAutomations } from '../services/mock.js'

const router = express.Router()

router.get('/live', (req, res) => {
  res.json(getLiveEnergyData())
})

router.get('/automations', (req, res) => {
  res.json(getAutomations())
})

export default router