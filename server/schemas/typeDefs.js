const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
  }

  type Habit {
    _id: ID
    habitText: String
    createdAt: String
    username: String
  }
  
  type Query {
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
    newHabit(habitText: String): Habit
  }
`;

module.exports = typeDefs;
