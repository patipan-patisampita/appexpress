const express = require('express')
const app = express()
const data = require('./vnlapi.json')
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!ok')
})
app.get('/api', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})