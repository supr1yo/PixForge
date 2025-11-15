import express from 'express'
import cors from 'cors'
import upload from './routes/upload.route.js'
import file from './routes/file.route.js'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use(cors({ origin: '*' }))

app.use('/image', upload);
app.use('/file', file);

app.get('/', (req, res) => {
  res.json({ message: 'hello world!!' })
})

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})
