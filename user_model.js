const { readFileSync } = require('fs')

const loadUser = () => users = JSON.parse(readFileSync('users.json'))

module.exports = { loadUser }