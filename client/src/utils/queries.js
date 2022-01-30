import { gql } from '@apollo/client';

export const QUERY_HABITS = gql `
query habits($username: String) {
  habits(username: $username) {
    _id
    habitText
    createdAt
    username
    daysCount
    days {
      _id
      day
      completion
      log
    }
  }
}
`;


export const QUERY_HABIT = gql`
  query habit($id: ID!) {
    habit(_id: $id) {
      _id
      habitText
      createdAt
      username
      daysCount
      days {
        _id
        day
        completion
        log
    }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      habitCount
      habits {
        _id
        habitText
        createdAt
        daysCount
        habitComplete
        days {
          _id
          day
          status
          log
        }
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      email
      username
      habitCount
      habits {
        _id
        username
        createdAt
        habitComplete
        daysCount
        days {
          _id
          day
          status
          log
        }
      }
    }
  }
`;