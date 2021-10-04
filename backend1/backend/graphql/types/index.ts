
const cafeFields = `
cafeavatar: String!,
cafename: String,
cafephone: String,
  location: String,

  description: String,
  slug: String
  
`

const eventsFields = `
eventAvatar: String,
eventName: String,

  location: String,
  startDate: String,
  endDate: String,
  description: String,
  slug: String
 
`

const cityFields = `
cityAvatar: String,
cityName: String,
cityDescription: String,
slug: String

 
`


exports.cafeTypes = `
  type Cafe {
    _id: ID,
    ${cafeFields}
  }
  
  type FilterCafe {
    _id: ID,
    ${cafeFields}
  }
  input CafeInput {
    ${cafeFields}
  }
`
exports.eventsTypes = `
  type Event {
    _id: ID,
    ${eventsFields}
  }

  input EventInput {
    ${eventsFields}
  }
`

exports.cityTypes = `
  type City {
    _id: ID,
    ${cityFields}
  }

  input CityInput {
    ${cityFields}
  }
  type FilterCity {
    _id: ID,
    ${cityFields}
  }
`
exports.userTypes = `
  type User {
    _id: ID,
    avatar: String
    username: String
    name: String
    email: String
    role: String
  }

  type  Dogs {
    _id: ID,
   
  }


  input SignUpInput {
    avatar: String
    username: String!
    name: String
    email: String!
    password: String!
    passwordConfirmation: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }
`
