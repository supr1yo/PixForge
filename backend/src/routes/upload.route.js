import express from 'express';
import multer from 'multer'
import path from 'path'
import fs from 'fs'

const router = express.Router();


// Create uploads folder if missing
const uploadDir = path.join(process.cwd(), 'uploads')
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir)

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    const name = Date.now() + '-' + Math.round(Math.random() * 1e9) + ext
    cb(null, name)
  }
})

const upload = multer({ storage })

// Upload route (single file)
router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.json({ error: 'No file uploaded.' })
  }

  res.json({
    message: 'Uploaded successfully',
    file: req.file,
    fileName: req.file.filename
  })
});

export default router;
