const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    text: {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            // We are saying that we want the user to be an objectID
            required: true,
            ref: 'User'
            // We need to mention which mo
        },
        type: String,
        required: [true, 'Please add a text value']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Goal',goalSchema)
// First parameter is the name of the model which you want to choose