const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    habits: [Habit]
    habitCount: Int
  }

  type Habit {
    _id: ID
    habitText: String
    createdAt: String
    username: String
    days: [daySchema]
    daysCount: Int
  }

  type Day {
    _id: ID
    day: Int
    completion: Boolean
    log: String
  }
  
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    habits(username: String): [Habit]
    habit(habitText: String): Habit
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addHabit(habitText: String!): Habit
    
  }
`;

module.exports = typeDefs;
