const Task = require('../models/Task')

class Tasks {
    async Create(data) {
        try {
            return await Task.create(data)
        } catch(err) {
            return {
                error: {
                    status: 500,
                    msg: err
                }
            }
        }
    }

    async List() {
        try {
            return await Task.find()
        } catch(err) {
            return {
                error: {
                    status: 500,
                    msg: err
                }
            }
        }
    }

    async getOne(data) {
        try {
            const task = await Task.findOne({
                _id: data.id
            })
    
            if(!task) {
                return {
                    error: {
                        status: 422,
                        msg: "Tarefa não encontrada"
                    }
                }
            }
    
            return task
        } catch(err) {
            return {
                error: {
                    status: 500,
                    msg: err
                }
            }
        }
    }

    async Update(data) {
        try {
            const updatedTask = await Task.updateOne({
                _id: data.id
            }, data)
    
            if(updatedTask.matchedCount == 0) {
                return {
                    error: {
                        status: 422,
                        msg: "Tarefa não encontrada"
                    }
                }
            }
    
            return await Task.findOne({_id: data.id})
        } catch(err) {
            return {
                error: {
                    status: 500,
                    msg: err
                }
            }
        }
    }

    async Delete(data) {
        try {
            const deletedTask = await Task.findOne({_id: data.id})
    
            if(!deletedTask) {
                return {
                    error: {
                        status: 422,
                        msg: "Tarefa não encontrada"
                    }
                }
            }

            await Task.deleteOne({
                _id: data.id
            })

            return deletedTask
        } catch(err) {
            return {
                error: {
                    status: 500,
                    msg: err
                }
            }
        }
    }
}

module.exports = new Tasks()