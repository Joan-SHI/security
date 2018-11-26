const express = require('express')
const request = require('superagent')

const {userExists, createUser} = require('../db/users')
const token = require('../auth/token')

const router = express.Router()

router.use(express.json())

router.post('/register', register, token.issue)



router.get('/path',token.decode, (req,res) => {
res.json({
  username: req.user.username
})
})

router.get('/login', token.decode, (req, res) => {
  res.json({
    username: req.user.username
  });
});


function login(req, res, next) {
  getUserByName(req.body.username)
    .then(user => {
      return user;
    })
    .then(user => {
      return user && hash.verifyUser(user.hash, req.body.password);
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}


function register (req, res, next) {
  console.log(req.body)
  userExists(req.body.username)
  .then(exists => {
    if (exists) {
      return res.status(400).send({ message: 'User exists' })
    }
    createUser(req.body.username, req.body.hash)
    .then(() => next())
  })
  .catch(err => {
    res.status(500).send({ message: err.message + "this is the catch in auth" })
  })
}

module.exports = router