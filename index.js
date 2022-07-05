const express = require('express')
const app = express()
const { loadUser } = require('./user_model')

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  const jsonContent = JSON.stringify(loadUser());
  res.send(jsonContent)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})