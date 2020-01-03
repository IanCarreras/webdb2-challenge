const knex = require('knex')
const config = require('../knexfile')

const db = knew(config.development)

module.exports = db