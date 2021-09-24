
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

export const GET_PARKING = gql`
query getParking {
  getParking {
    id
    createdAt
    memberId
    parkingCharge
     }
}
`

export const GET_MEMBERS = gql`
query getemembers {
  getMembers {
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

export const GET_DUEPAYMENTS = gql`
query  getChamber {
  duePayment {
    id
    createdAt
    chamberId
    status
    payment
    month
  }

}
`


export const GET_ACT = gql`
query  getActivity {
 
  getActivity {
    id
    message
    createdAt
  }
}
`
export const GET_PAYMENTS = gql`
query  getpayments {
 
  getpayments {
    memberId
    price
    createdAt
  }
}
`

export const SIGN_IN = gql`
  mutation Login(
    $email: String!
    $password: String!
  ) {
    login( 
      username: $email
      password: $password
    ) {
      id
    token
            
    }
  }
`

// AUTH QUERIES END ----------------------------
