const router = require('express').Router()
const Task   = require('../controllers/Task') 
const Auth   = require('../controllers/Auth')

router.post('/', Auth.checkToken, Task.Create)

router.get('/', Task.List)

router.get('/:id', Task.getOne)

router.patch('/:id', Task.Update)

router.put('/:id', Task.Update)

router.delete('/:id', Task.Delete)


module.exports = router