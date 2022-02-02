const { Schema } = require('mongoose');

const daySchema = new Schema(
    {
        day: {
            type: Number
        },
        status: {
            type: Boolean,
            default: false
        },
        log: {
            type: String
        }
    }
)

module.exports = daySchema;