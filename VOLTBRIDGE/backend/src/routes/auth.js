//VOLTBRIDGE/backend/src/routes/auth.js

import express from 'express'

const router = express.Router()

router.post('/login', (req, res) => {
  const { email } = req.body

  res.json({
    success: true,
    token: 'voltbridge-demo-token',
    user: {
      email
    }
  })
})

export default router