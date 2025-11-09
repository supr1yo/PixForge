import express from 'express';
const PORT = process.env.PORT;

const app = express();

// Home
app.get('/', (req, res) => {
  res.json({
    "message": "hello world!!"
  })
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));