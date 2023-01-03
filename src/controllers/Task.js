const Task = require('../services/Task')

class Tasks {
    async Create(req, res) {
        const data = {
            name: req.body.name
        }
    
        if(!data.name) {
            return res.status(422).json({
                error: "Nome obrigatório"
            })
        }

        const createdTask = await Task.Create(data)
    
        if(createdTask.error)
            return res.status(createdTask.error.status).json(createdTask.error.msg)

        res.status(201).json(createdTask)
    }

    async List(req, res) {
        const findedTasks = await Task.List()
    
        if(findedTasks.error)
            return res.status(findedTasks.error.status).json(findedTasks.error.msg)

        res.status(201).json(findedTasks)
    }

    async getOne(req, res) {
        const data = {
            id: req.params.id
        }
    
        const findedTask = await Task.getOne(data)

        if(findedTask.error)
            return res.status(findedTask.error.status).json(findedTask.error.msg)

        res.status(200).json(findedTask)
    }

    async Update(req, res) {
        const data = Object.assign(req.params, req.body);

        const updatedTask = await Task.Update(data)
    
        if(updatedTask.error)
            return res.status(updatedTask.error.status).json(updatedTask.error.msg)

        res.status(201).json(updatedTask)
    }

    async Delete(req, res) {
        const data = {
            id: req.params.id
        }
    
        const deletedTask = await Task.Delete(data)

        if(deletedTask.error)
            return res.status(deletedTask.error.status).json(deletedTask.error.msg)

        res.status(201).json(deletedTask)
    }
}

module.exports = new Tasks()