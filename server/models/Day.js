const { Schema } = require('mongoose');

const daySchema = new Schema(
    {
        day: {
            type: Number,
            max: 21
        },
        status: {
            type: Boolean,
            defualt: false
        },
        log: {
            type: String
        }
    }
)

module.exports = daySchema;