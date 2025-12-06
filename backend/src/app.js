<<<<<<< HEAD
import express from 'express'
import cors from 'cors'
import upload from './routes/upload.route.js'
import file from './routes/file.route.js'
=======
import express from 'express';
import multer from 'multer';

const PORT = process.env.PORT;
>>>>>>> 11acc4f0ed5e2f43cd956f5f2f37859682cce9dc

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use(cors({ origin: '*' }))

app.use('/image', upload);
app.use('/file', file);

<<<<<<< HEAD
=======
// Home route
>>>>>>> 11acc4f0ed5e2f43cd956f5f2f37859682cce9dc
app.get('/', (req, res) => {
  res.json({ message: 'hello world!!' })
})

<<<<<<< HEAD
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})
=======
let storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, '/uploads'),
  filename: ''
})

// Form data
app.post('/image', (req, res) => {
  const { } = req.body;
  if(!req.files) {
    return res.json({ error: 'All fields are required.' });
  }
})

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))
>>>>>>> 11acc4f0ed5e2f43cd956f5f2f37859682cce9dc
