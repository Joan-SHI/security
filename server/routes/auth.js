const express = require('express')
const request = require('superagent')

const {userExists, createUser} = require('../db/users')

const router = express.Router()

router.use(express.json())

router.post('/register', register)

function register (req, res) {
  console.log(req.body)
  userExists(req.body.username)
  .then(exists => {
    if (exists) {
      return res.status(400).send({ message: 'User exists' })
    }
    createUser(req.body.username, req.body.hash)
    .then(() => res.status(201).end())
  })
  .catch(err => {
    res.status(500).send({ message: err.message + "this is the catch in auth" })
  })
}

module.exports = router