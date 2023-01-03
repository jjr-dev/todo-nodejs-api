const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    name: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = Task