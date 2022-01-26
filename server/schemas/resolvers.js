const { User, Habit} = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().select('-__v -password')
     
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
    
    },
    habits: async () => {
      return Habit.find();
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user
    },
    newHabit: async (parent, args) => {
      const habit = await Habit.create(args);
      return habit
    },
  }
};

module.exports = resolvers;
