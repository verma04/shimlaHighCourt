
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
  avatar
    role
    token
    Chamber
    fullname
    memberDescription
    slug
    phone
    address
    status
  }
}
`

export const DELETE_MEMBER = gql`
mutation deleteMember(
  
  
  $id: ID!
  
 
 
 ) {
   deleteMember(id: $id ) {
    id

  }
}
`
export const GET_CHAMBERS = gql`
query  getChamber {
  getChamber {
    id

avatar
username
chamberId
  email
}
}
`


export const GET_SERVICES = gql`
query  getservices {
  getServices {
    id
    createdAt
    servicesName
    servicesItems
    servicesPrice
    servicesInterval
    servicesDescription
    uniq
}
}
`


export const DELETE_SER = gql`
mutation deleteFinnaceServices(
  
  
   $id: ID!
   
  
  
  ) {
    deleteFinnaceServices(id: $id ) {
      id
    createdAt
    servicesName
    servicesItems
    servicesPrice
    servicesInterval
    servicesDescription
    uniq
   


  
  }
}`






export const GET_DUEPAYMENTS = gql`
query  getduepayments {
  duePayment {
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


export const ADD_MEMBERS = gql`
  mutation RegisterMemberMutation(
    $username: String!,
     $email: String!,
      $address: String!, 
      $phone: String!,
       $gender: String!,
       $fullname:String,
       $memberDescription: String
  ) {
    registerMember( 
      username: $username,
    email:$email
    gender:$gender
    address: $address 
    phone: $phone
    fullname:$fullname,
       memberDescription: $memberDescription
    ) {
      id
    email
    
  gender
    username
    createdAt
    avatar
    Chamber
    fullname
    memberDescription
    slug
    phone
    status
    }
  }
`

export const EDIT_MEMBERS = gql`
  mutation EditMemberMutation(
    $id: ID!,
    $username: String!,
     $email: String!,
      $address: String!, 
      $phone: String!,
       $gender: String!,
       $fullname:String,
       $memberDescription: String
       $status: String
  ) {
    editMember( 
      id: $id
      username: $username,
    email:$email
    gender:$gender
    address: $address 
    phone: $phone
    fullname:$fullname,
       memberDescription: $memberDescription
       status: $status
    ) {
      id
    email
    gender
    username
    createdAt
    avatar
    Chamber
    fullname
    memberDescription
    slug
    phone
    status
            
    }
  }
`




export const GET_MEMBER_ID = gql`
query getMemberByid($getMemberByidId: ID!) {
  getMemberByid(id: $getMemberByidId) {
    id
    email
     phone
  gender
    username
    createdAt
    avatar
    Chamber
    address
    fullname
    memberDescription
    slug
    status
  }
}`


// export const ADD_CHAMBER = gql`
//   mutation addChamber(
//     $addChambersId: String!,
//     $addChambersPrice: String!
//   ) {
//     addChambers( 
//       id: $addChambersId
//       price: $$addChambersPrice
//     ) {
//       id

            
//     }
//   }
// `
// AUTH QUERIES END ----------------------------


export const ADD_CHAMBER = gql`
  mutation addChamber(
    $addChambersId: String!,
     $addChambersPrice: String!
  ) {
    addChambers( 
       id: $addChambersId
       price: $addChambersPrice
     ) {
      id

avatar
username
chamberId
  email
  
            
    }
  }
`


export const ADD_PARKING = gql`
mutation createParking(
  $createParkingMemberId: String!, 
  $createParkingParkingCharge: String!) {
  createParking(
    memberId: $createParkingMemberId, 
    parkingCharge: $createParkingParkingCharge) {
    
      id
    createdAt
    memberId
    parkingCharge
  }
}
`
 



export const ASSIGN_SERVICES = gql`
mutation assignServices(
  
  
   $id: ID!
   $userId: String
  
  
  ) {
    assignServices(_id: $id , userId: $userId) {
      id
    arr {
      id
      createdAt
      servicesName
      servicesPrice
      uniq
    }


  
  }
}`


export const DELETE_SERVICES = gql`
mutation deleteUserServices(
  
  
   $id: ID!
   $userId: String
  
  
  ) {
    deleteUserServices(_id: $id , userId: $userId) {
      id
    arr {
      id
      createdAt
      servicesName
      servicesPrice
      uniq
    }
   


  
  }
}`


export const USER_SERVICES = gql`
query userServices(
  
  
   $id: ID!

  
  
  ) {
    userServices(id: $id ) {
      id
    createdAt
    servicesName
    servicesPrice
    uniq


  
  }
}`

export const CREATE_SERVICES = gql`
mutation Mutation($ServicesName: String!, $ServicesItems: String!, $ServicesPrice: String!, $ServicesInterval: String!, $ServicesDescription: String!) {
  createServices(servicesName: $ServicesName, servicesItems: $ServicesItems, servicesPrice: $ServicesPrice, servicesInterval: $ServicesInterval, servicesDescription: $ServicesDescription) {
    id
    createdAt
    servicesName
    servicesItems
    servicesPrice
    servicesInterval
    servicesDescription
    uniq
  }
}`



export const TICKET = gql`
 query getticket {
  getticket {
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




export const USER_ID_TICKET_COMMENT_ADMIN = gql`
 mutation getUserticketByIdCommentAdmin (
  $id: String!
  $answer: String!
 
){
  getUserticketByIdCommentAdmin(
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
