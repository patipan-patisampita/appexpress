const { readFileSync } = require('fs')

const loadUser = () => users = JSON.parse(readFileSync('vnlapi.json'))

module.exports = { loadUser }