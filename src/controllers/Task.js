const Task = require('../services/Task')

class Tasks {
    async Create(req, res) {
        const data = {
            name: req.body.name,
            user_id: req.user_id
        }
    
        if(!data.name)
            return res.status(422).json({error: "Nome obrigatório"})

        const createdTask = await Task.Create(data)
    
        if(createdTask.error)
            return res.status(createdTask.error.status).json({error: createdTask.error.msg})

        res.status(201).json(createdTask)
    }

    async List(req, res) {
        const data = {
            user_id: req.user_id
        }

        const findedTasks = await Task.List(data)
    
        if(findedTasks.error)
            return res.status(findedTasks.error.status).json({error: findedTasks.error.msg})

        res.status(201).json(findedTasks)
    }

    async getOne(req, res) {
        const data = {
            id: req.params.id,
            user_id: req.user_id
        }
    
        const findedTask = await Task.getOne(data)

        if(findedTask.error)
            return res.status(findedTask.error.status).json({error: findedTask.error.msg})

        res.status(200).json(findedTask)
    }

    async Update(req, res) {
        const data = Object.assign(req.params, req.body, {user_id: req.user_id});

        if(!data.name)
            return res.status(422).json({error: "Nome obrigatório"})

        if(!data.checked)
            return res.status(422).json({error: "Marcação obrigatória"})

        const updatedTask = await Task.Update(data)
    
        if(updatedTask.error)
            return res.status(updatedTask.error.status).json({error: updatedTask.error.msg})

        res.status(201).json(updatedTask)
    }

    async partialUpdate(req, res) {
        const data = Object.assign(req.params, req.body, {user_id: req.user_id});

        const updatedTask = await Task.Update(data)
    
        if(updatedTask.error)
            return res.status(updatedTask.error.status).json({error: updatedTask.error.msg})

        res.status(201).json(updatedTask)
    }

    async Delete(req, res) {
        const data = {
            id: req.params.id,
            user_id: req.user_id
        }
    
        const deletedTask = await Task.Delete(data)

        if(deletedTask.error)
            return res.status(deletedTask.error.status).json({error: deletedTask.error.msg})

        res.status(201).json(deletedTask)
    }
}

module.exports = new Tasks()