const { AuthenticationError } = require('apollo-server-express');
const { User, Habit } = require('../models');
const { signToken } = require('../utils/auth');

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
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    newHabit: async (parent, args) => {
      const habit = await Habit.create(args);
      return habit
    },
  }
};

module.exports = resolvers;
