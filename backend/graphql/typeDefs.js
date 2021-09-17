// const { default: gql } = require('graphql-tag');

const { gql } = require('apollo-server');

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type Services {
    id: ID!
    createdAt: String!
    servicesName: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  type Member {
    id: ID!
    email: String!
    gender: String!
    username: String!
    createdAt: String!
    avatar: String
  }

  
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  input RegisterMember {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post

    deleteServices(id: ID!): Member
  }
  type Mutation {
    register(   username: String! password: String! confirmPassword: String! email: String!): User!
    registerMember(
      username: String!
    password: String!
    confirmPassword: String!
    email: String!
    gender: String!

     ): Member!
    login(username: String!, password: String!): User!
    createServices(servicesName: String!): Services!
 
  }
  type Subscription {
    newPost: Post!
  }
`;
