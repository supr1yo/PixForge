import express from 'express'
import path from 'path'
import fs from 'fs'

const router = express.Router()

const uploadDir = path.join(process.cwd(), 'uploads')

router.get('/:filename', (req, res) => {
  const file = path.join(uploadDir, req.params.filename)

  if (!fs.existsSync(file)) {
    return res.status(404).json({ error: 'not found' })
  }

  res.sendFile(file)
})

export default router
