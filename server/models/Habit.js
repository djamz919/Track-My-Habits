const { Schema, model } = require('mongoose');
const daySchema = require('./Day');
const dateFormat = require('../utils/dateFormat');

const habitSchema = new Schema(
    {
      habitText: {
        type: String,
        required: "You can't start/quit nothing",
        minlength: 1,
        maxlength: 100
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      },
      username: {
        type: String,
        required: true
      },
      days: [daySchema] 
      
    },
    {
      toJSON: {
        getters: true
      }
    }
  );
  
  habitSchema.virtual('daysCount').get(function() {
    return this.days.length;
  });
  
  const Habit = model('Habit', habitSchema);
  
  module.exports = Habit;
  