const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    habits: [Habit]
    habitCount: Int
  }

  type Habit {
    _id: ID
    habitText: String
    createdAt: String
    username: String
    habitComplete: Boolean
    days: [Day]
    daysCount: Int
  }

  type Day {
    _id: ID
    day: Int
    status: Boolean
    log: String
  }
  
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    habits(username: String): [Habit]
    habit(_id: ID): Habit
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addHabit(habitText: String!): Habit
    addDay(day: Int!, status: Boolean!, log: String, habitId: ID!): Habit
  }
`;

module.exports = typeDefs;
