const { Schema } = require('mongoose');

const daySchema = new Schema(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        day: {
            type: Number,
            required: true,
            max: 21
        },
        status: {
            type: Boolean,
            reqiured: true
        },
        log: {
            type: String
        }
    }
)

module.exports = daySchema;