const { Schema } = require('mongoose');

const daySchema = new Schema(
    {
        day: {
            type: Number,
            required: true,
            max: 21
        },
        completion: {
            type: Boolean,
            reqiured: true
        },
        log: {
            type: String
        }
    }
)

module.exports = daySchema;