const Task = require('../services/Task')

class Tasks {
    async Create(req, res) {
        const { name } = req.body
        const user_id = req.user_id
    
        if(!name)
            return res.status(422).json({error: "Nome obrigatório"})

        const createdTask = await Task.Create({
            name,
            user_id
        })
    
        if(createdTask.error)
            return res.status(createdTask.error.status).json({error: createdTask.error.msg})

        res.status(201).json(createdTask)
    }

    async List(req, res) {
        const user_id = req.user_id

        const findedTasks = await Task.List({user_id})
    
        if(findedTasks.error)
            return res.status(findedTasks.error.status).json({error: findedTasks.error.msg})

        res.status(201).json(findedTasks)
    }

    async getOne(req, res) {
        const { id } = req.params
        const user_id = req.user_id
    
        const findedTask = await Task.getOne({
            id,
            user_id
        })

        if(findedTask.error)
            return res.status(findedTask.error.status).json({error: findedTask.error.msg})

        res.status(200).json(findedTask)
    }

    async Update(req, res) {
        const { name, checked } = req.body
        const id = req.params.id
        const user_id = req.user_id

        if(!name)
            return res.status(422).json({error: "Nome obrigatório"})

        const updatedTask = await Task.Update({
            id,
            name,
            checked,
            user_id
        })
    
        if(updatedTask.error)
            return res.status(updatedTask.error.status).json({error: updatedTask.error.msg})

        res.status(201).json(updatedTask)
    }

    async partialUpdate(req, res) {
        const { name, checked } = req.body
        const id = req.params.id
        const user_id = req.user_id

        const updatedTask = await Task.Update({
            id,
            name,
            checked,
            user_id
        })
    
        if(updatedTask.error)
            return res.status(updatedTask.error.status).json({error: updatedTask.error.msg})

        res.status(201).json(updatedTask)
    }

    async Delete(req, res) {
        const { id } = req.params
        const user_id = req.user_id
    
        const deletedTask = await Task.Delete({
            id,
            user_id
        })

        if(deletedTask.error)
            return res.status(deletedTask.error.status).json({error: deletedTask.error.msg})

        res.status(201).json(deletedTask)
    }
}

module.exports = new Tasks()