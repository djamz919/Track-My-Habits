import { gql } from '@apollo/client';

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

export const LOGIN = gql`

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