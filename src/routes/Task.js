const router = require('express').Router()
const Task   = require('../controllers/Task') 

router.post('/', Task.Create)

router.get('/', Task.List)

router.get('/:id', Task.getOne)

router.patch('/:id', Task.Update)

router.put('/:id', Task.Update)

router.delete('/:id', Task.Delete)


module.exports = router