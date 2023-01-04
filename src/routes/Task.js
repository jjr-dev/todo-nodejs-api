const router = require('express').Router()
const Task   = require('../controllers/Task') 
const Auth   = require('../controllers/Auth')

router.post('/', Auth.checkToken, Task.Create)

router.get('/', Auth.checkToken, Task.List)

router.get('/:id', Auth.checkToken, Task.getOne)

router.patch('/:id', Auth.checkToken, Task.Update)

router.put('/:id', Auth.checkToken, Task.Update)

router.delete('/:id', Auth.checkToken, Task.Delete)


module.exports = router