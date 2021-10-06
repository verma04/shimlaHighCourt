
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
    fullname
      memberDescription
      phone
      address
      status

    
   
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
     id
    status
    createdAt
    month
    list {
      serviceName
      serviceId
      price
    }
  
  
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


export const USER_ACT = gql`
query getUserActivities {
  getUserActivities{
  id
     message

        topic
    
     
      createdAt 
  }
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


export const ADD_TICKET = gql`
  mutation addticket(
    $ticketTitle: String!
    $answer: String!
  ) {
    addticket( 
      ticketTitle: $ticketTitle
      answer: $answer
    ) {
      id
      ticketTitle
    status
    createdAt
    editedAt
    member
    comment {
      name
      time
      answer
      status
    }
 
            
    }
  }
`


export const SER_PAYMENT = gql`
  mutation servicepayment(
    $payment_id: String!
    $userid: String!
    $serviceID: String!
  ) {
    servicepayment( 
      payment_id: $payment_id
      userid: $userid
      serviceID: $serviceID
    ) {
      id
    paymentId
    serviceID
    status
    month
    createdAt
    totalmoney
    paymentBilling {
      serviceName
      serviceId
      price
    }
  
 
            
    }
  }
`

export const ALL_PAYMENTS = gql`
  query userAllPayments  {
   userAllPayments  {
    id
    paymentId
    status
    totalmoney
    month
    createdAt
    paymentBilling {
      serviceName
      serviceId
      price
    }
 
            
   }  
  }
`



export const USER_TICKET = gql`
 query getUserticket {
  getUserticket {
    id
    ticketTitle
    status
    createdAt
    editedAt
    member
    comment {
      name
      time
      answer
      status
    }
  }
}
`

export const USER_ID_TICKET = gql`
 query getUserticketById (
  $id: String!
 
){
  getUserticketById(
    id: $id
  ) {
    id
    ticketTitle
    status
    createdAt
    editedAt
    member
    comment {
      name
      time
      answer
      status
    }
  }
}
`



export const USER_ID_TICKET_COMMENT = gql`
 mutation getUserticketByIdComment (
  $id: String!
  $answer: String!
 
){
  getUserticketByIdComment(
    id: $id
    answer: $answer
  ) {
    id
    ticketTitle
    status
    createdAt
    editedAt
    member
    comment {
      name
      time
      answer
      status
    }
  }
}
`


export const USER_ID_TICKET_CLOSE = gql`
 mutation getUserticketByIdClose (
  $id: String!
  $status: String!
 
){
  getUserticketByIdClose(
    id: $id
    status: $status
  ) {
    id
    ticketTitle
    status
    createdAt
    editedAt
    member
    comment {
      name
      time
      answer
      status
    }
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
