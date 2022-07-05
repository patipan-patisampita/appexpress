const express = require('express')
const app = express()
const data = require('./vnlapi.json')
const users = require('./users.json')
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api', (req, res) => {
  res.send(data)
})

app.get('/users', (req, res) => {
  res.send(users)
})


app.get('/users/:userId', (req, res) => {
  res.send(req.params)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})