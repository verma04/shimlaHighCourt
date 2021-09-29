
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



export const GET_DUEPAYMENTS = gql`
query  getduepayments {
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


export const ADD_MEMBERS = gql`
  mutation RegisterMemberMutation(
    $username: String!,
     $email: String!,
      $address: String!, 
      $phone: String!,
       $gender: String!
  ) {
    registerMember( 
      username: $username,
    email:$email
    gender:$gender
    address: $address 
    phone: $phone
    ) {
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

export const ASSIGN_PARKING = gql`
mutation assignParking($addChamberToMemberId: String!, $addChamberToMemberMemberId: ID!) {
  addChamberToMember(id: $addChamberToMemberId, memberId: $addChamberToMemberMemberId) {
    id


  
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