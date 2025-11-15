import express from 'express';
import multer from 'multer';

const PORT = process.env.PORT;

const app = express();

// Home route
app.get('/', (req, res) => {
  res.json({
    "message": "hello world!!"
  })
});

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