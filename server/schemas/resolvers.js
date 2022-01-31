const { AuthenticationError } = require('apollo-server-express');
const { User, Habit } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('habits');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async (context) => {
      
      return User.find().select('-__v -password').populate('habits');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
      .select('-__v -password').populate('habits');
      
    },
    habits: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Habit.find(params);
    },
    habit: async (parent, {_id}) => {
      return Habit.findOne({ _id: id})
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
    addHabit: async (parent, args, context) => {
      if (context.user) {
        const habit = await Habit.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { habits: habit._id } },
          { new: true }
        );

        return habit;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addDay: async (parent, {habitId, completion, log, day}, context) => {
     if(context.user) {
      const newDay = await Habit.findOneAndUpdate(
        {_id: habitId},
        {$push: {days: {completion, log, day}} },
        {new: true}
      );
      // if habit.day.length === 21
      return newDay
    }
    throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;


