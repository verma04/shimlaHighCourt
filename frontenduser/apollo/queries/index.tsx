
import { gql } from 'apollo-boost';

// CITY QUERIES START ----------------------------




export const GET_USER = gql`
query getuser {
  getMember {
    id
    email
    gender
    username
    createdAt
    avatar
    role
   

    
   
  }
}
`

export const GET_NOTIFICATIONS = gql`
query notifications {
  notifications {
    type
      message
  createdAt
  }
}
`


export const GET_USER_SERVICES = gql`
query getUserServices {
  getUserServices {
    id
    createdAt
    servicesName
    servicesPrice
    uniq
  }
}
`

export const GET__PAYMENT = gql`
query getUserPayments {
  getUserPayments {
    month
  
      payment
      status
      serviceName
      serviceId
      createdAt
    
  
  }
}
`

export const USER_SERVICES = gql`
query getUserServices {
      id
    createdAt
    servicesName
    servicesPrice
    uniq


  
  
}`


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
