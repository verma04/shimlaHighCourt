
import { gql } from 'apollo-boost';

// CITY QUERIES START ----------------------------


export const GET_USER = gql`
query getuser {
  getUser {
    id
    role
    email
     }
}
`

export const GET_MEMBERS = gql`
query getemembers {
  getMember {
    id
    email
    
  gender
    username
    createdAt
    avatar
    Chamber
    
  }
}
`
export const GET_CHAMBERS = gql`
query  getChamber {
  getChamber {
  member
  id
  chamberId
}
}
`


export const SIGN_IN = gql`
  mutation Login(
    $email: String!
    $password: String!
  ) {
    memberLogin( 
      email: $email
      password: $password
    ) {
      id
    token
            
    }
  }
`

// AUTH QUERIES END ----------------------------
