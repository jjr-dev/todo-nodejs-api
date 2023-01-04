const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        required: true,
        default: false
    },
    user_id: {
        type: String,
        required: true
    }
})

taskSchema.set('timestamps', true);

module.exports = mongoose.model('Task', taskSchema)