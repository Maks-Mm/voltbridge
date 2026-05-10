//VOLTBRIDGE /backend/src/index.js

import express from 'express'
import cors from 'cors'

import energyRoutes from './routes/energy.js'
import savingsRoutes from './routes/savings.js'
import authRoutes from './routes/auth.js'

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.use('/api/energy', energyRoutes)
app.use('/api/savings', savingsRoutes)
app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
  res.json({
    message: 'VoltBridge API Running'
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})