const router = require('express').Router()

const Task = require('../models/Task')

router.post('/', async (req, res) => {
    const task = {
        name: req.body.name
    }

    if(!task.name) {
        return res.status(422).json({
            error: "Nome obrigatório"
        })
    }

    try {
        await Task.create(task);

        res.status(201).json({
            message: "Tarefa adicionada"
        })
    } catch(err) {
        res.status(500).json({
            error: err
        })
    }
})

router.get('/', async(req, res) => {
    try {
        const tasks = await Task.find();

        res.status(200).json(tasks)
    } catch(err) {
        res.status(500).json({
            error: err
        })
    }
})

router.get('/:id', async(req, res) => {
    const id = req.params.id

    try {
        const task = await Task.findOne({
            _id: id
        })

        if(!task) {
            return res.status(422).json({
                error: "Tarefa não encontrada"
            })
        }

        res.status(200).json(task)
    } catch(err) {
        res.status(500).json({
            error: err
        })
    }
})

router.patch('/:id', async(req, res) => {
    const id = req.params.id

    const task = req.body;

    try {
        const updatedTask = await Task.updateOne({
            _id: id
        }, task)

        if(updatedTask.matchedCount == 0) {
            return res.status(422).json({
                error: "Tarefa não encontrada"
            })
        }

        res.status(200).json({
            message: "Tarefa editada"
        })
    } catch(err) {
        res.status(500).json({
            error: err
        })
    }
})

router.delete('/:id', async(req, res) => {
    const id = req.params.id

    try {
        const deletedTask = await Task.deleteOne({
            _id: id
        })

        if(deletedTask.deletedCount == 0) {
            return res.status(422).json({
                error: "Tarefa não encontrada"
            })
        }

        res.status(200).json({
            message: "Tarefa excluída"
        })
    } catch(err) {
        res.status(500).json({
            error: err
        })
    }
})


module.exports = router