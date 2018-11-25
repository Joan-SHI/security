const express = require('express')


const router = express.Router()

router.use(express.json())

router.post('/register', register)

function register (req, res) {
  const {username, password} = req.body
}

module.exports = router