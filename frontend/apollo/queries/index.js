
import { gql } from 'apollo-boost';

// CITY QUERIES START ----------------------------

export const CREATE_CITY = gql`
mutation  CreateCity(
  $cityAvatar: String!
  $cityName: String!

  $cityDescription: String!
  $slug: String!

) {
  createCity(input: {
    cityAvatar: $cityAvatar
    cityName: $cityName
    cityDescription: $cityDescription
    slug: $slug
  }) {
    _id,
    cityAvatar
    cityName
  
  }
  }`
  ;

  export const GET_CITIES = gql`
  
    query Bookkings {
            bookings {
              _id
             createdAt
             event {
               _id
               title
               date
               price
             }
            }
          }
  `;

export const GET_USER = gql`
query getuser {
  user {
    _id
    
  }
}
`

export const FILTER_CITY = gql`
query FilterCity($id: ID) {
  filterCity(id: $id) {
      _id,
      cityAvatar
       cityName
     cityDescription
  }
}
`

export const GET_CAFE = gql`
  query Cafe($id: ID) {
    cafe (id: $id) {
      _id,
      cafeavatar
      cafename
      cafephone
        location
        description
    }
  }
`
export const FILTER_CAFE = gql`
  query FilterCafes($id: ID) {
    filterCafes (id: $id) {
      _id,
      cafeavatar
      cafename
      cafephone
      location 
      description
     
    }
  }
`


export const GET_CAFES = gql`
  query Cafes {
    cafes {
      _id,
      cafeavatar
      cafename
      cafephone
        location
        description,
        slug
    }
  }`;



  export const CREATE_CAFE = gql`

  mutation CreateCafe(
    $cafeavatar: String!
    $cafename: String!
    $cafephone: String!
    $location: String!
    $description: String!
    $slug: String!
  ) {
    createCafe(input: {
      cafeavatar: $cafeavatar
      cafename: $cafename
      cafephone: $cafephone
      location: $location
      description: $description
      slug: $slug
    }) {
      _id,
      cafeavatar
      cafename
      cafephone
      location
      description
    }
  }`;
  
  
  ;
export const UPDATE_CAFE = gql`
  mutation UpdatePortfolio($id: ID) {
    updatePortfolio(id: $id, input: {
      title: "UPDATE Job"
      company: "UPDATE Company"
      companyWebsite: "UPDATE Website"
      location: "UPDATE Location"
      jobTitle: "UPDATE Job Title"
      description: "UPDATE Desc"
      startDate: "2012-12-12T23:59Z"
      endDate: "2013-11-14T23:59Z"
    }) {
      _id,
      title,
      company,
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }`;

export const DELETE_CAFE = gql`
  mutation DeleteCafe($id: ID) {
    deleteCafe(id: $id)
  }
`

export const GET_EVENT = gql`
  query Event($id: ID) {
    event (id: $id) {
      _id,
      eventAvatar
      eventName
        location
        description
      startDate
      endDate
    }
  }
`

export const GET_EVENTS = gql`
 `;



export const CREATE_EVENT = gql`
  mutation CreateEvents(
    $eventAvatar: String!
    $eventName: String!
    $location: String!
    $description: String!
    $endDate: String!
    $startDate: String!
    $slug: String!

  ) {
    createEvents(input: {
      eventAvatar: $eventAvatar
      eventName: $eventName
      location: $location
      startDate: $startDate
      endDate: $endDate
      description: $description
      slug: $slug
    }) {
      _id,
    }
  }
  `


export const UPDATE_EVENT = gql`
  mutation UpdatePortfolio($id: ID) {
    updatePortfolio(id: $id, input: {
      title: "UPDATE Job"
      company: "UPDATE Company"
      companyWebsite: "UPDATE Website"
      location: "UPDATE Location"
      jobTitle: "UPDATE Job Title"
      description: "UPDATE Desc"
      startDate: "2012-12-12T23:59Z"
      endDate: "2013-11-14T23:59Z"
    }) {
      _id,
      title,
      company,
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }`;

export const DELETE_EVENT = gql`
  mutation DeletePortfolio($id: ID) {
    deletePortfolio(id: $id)
  }
`



// AUTH QUERIES START ----------------------------

export const SIGN_UP = gql`
  mutation SignUp(
    $avatar: String
    $username: String!
    $email: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    signUp(input: {
      avatar: $avatar
      username: $username
      email: $email
      password: $password
      passwordConfirmation: $passwordConfirmation
    })
  }
`

export const SIGN_IN = gql`
  mutation SignIn(
    $email: String!
    $password: String!
  ) {
    signIn(input: {
      email: $email
      password: $password
    }) {
      id
            token
            tokenExpiration
    }
  }
`

export const SIGN_OUT = gql`mutation SignOut{ signOut }`


export  const GET_DOGS = gql`
  query Dogs {
    dogs {
      _id
      
    }
  }`

// AUTH QUERIES END ----------------------------
