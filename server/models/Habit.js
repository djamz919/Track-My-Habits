const { Schema, model } = require('mongoose');
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
      }
      
    },
    {
      toJSON: {
        getters: true
      }
    }
  );
  
//   habitSchema.virtual('reactionCount').get(function() {
//     return this.reactions.length;
//   });
  
  const Habit = model('Habit', habitSchema);
  
  module.exports = Habit;
  