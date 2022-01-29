import { gql } from '@apollo/client';

export const HABITS = gql `
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

// export const QUERY_ME_BASIC = gql`
//   {
//     me {
//       _id
//       username
//       email
//       friendCount
//       friends {
//         _id
//         username
//       }
//     }
//   }
// `;

export const ALL_USERS = gql `
{
    users {
      username
    }
  
}
`;