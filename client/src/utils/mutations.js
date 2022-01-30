import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!){
    login(email: $email, password: $password) {
        token
     user{
      password
      email
      _id
      username
    } 
   }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password) {
      user{
      username
      password
      email
      } 
    }
  }
`;

export const ADD_HABIT = gql`
mutation addHabit($habitText: String!) {
  addHabit(habitText: $habitText) {
    _id
    habitText
    username
    createdAt
  }
}
`;

export const ADD_DAY = gql`
mutation addDay($day: Int!, $status: Boolean!, $log: String, $habitId: ID!) {
  addDay(day: $day, status: $status, log: $log, habitId: $habitId) {
    _id
    days {
      _id
      day
      status
      log
    }
  }
}
`;