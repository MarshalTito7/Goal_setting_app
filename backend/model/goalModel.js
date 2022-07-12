const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Goal',goalSchema)
// First parameter is the name of the model which you want to choose