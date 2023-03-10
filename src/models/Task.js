const mongoose = require('mongoose')

const Schema = mongoose.Schema({
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

Schema.set('timestamps', true);

module.exports = mongoose.model('Task', Schema)