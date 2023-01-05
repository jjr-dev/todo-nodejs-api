const router = require('express').Router()

const User = require('../controllers/User')

router.post('/', User.Create)

module.exports = router