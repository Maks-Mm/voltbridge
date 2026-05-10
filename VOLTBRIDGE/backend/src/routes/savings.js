//VOLTBRIDGE/backend/src/routes/savings.js


import express from 'express'
import { getSavingsData } from '../services/mock.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.json(getSavingsData())
})

export default router