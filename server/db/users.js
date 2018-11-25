const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  createUser,
  userExists
}

function createUser (username, password, conn) {
  const db = conn ||connection
  return db('users')
  .insert({username, hash:password })
}

function userExists(username, conn) {
  const db = conn || connection
  return db('users')
.count('id as n')
.where('username', username)
.then(count => {
  return count[0].n >0
})

}