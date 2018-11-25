const express = require('express')

const {userExists, createUser} = require('../db/users')

const router = express.Router()

router.use(express.json())

router.post('/register', register)

function register (req, res) {
  userExists(req.body.username)
  .then(exists => {
    if (exists) {
      return res.status(400).send({ message: 'User exists' })
    }
    createUser(req.body.username, req.body.password)
    .then(() => res.status(201).end())
  })
  .catch(err => {
    res.status(500).send({ message: err.message })
  })
}

module.exports = router