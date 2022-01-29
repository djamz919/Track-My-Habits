import { gql } from '@apollo/client';

// export const HABITS = gql `
// query habits($username: String) {
//     habits(username: $username) {

//         _id
//         username
//         habitText
//         createdAt
//         days: {
//             _id
//             day
//             completion
//             log
//         }
//     }
// }
// `;
export const GET_HABITS =gql `


`;

export const GET_DAYS = `

`;

export const ALL_USERS = gql `
{
    users {
      username
    }
  
}
`;