// const { default: gql } = require('graphql-tag');
import { Member } from "../models/Member";
const { gql } = require('apollo-server');
const cron = require('node-cron');
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
    servcieList : [Chamber]!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
    
  }

  type Chamber {
 
    member: String!
    id: ID!
    chamberId: String!
    
  }
  

  type Member {
    id: ID!
    email: String!
    gender: String!
    username: String!
    createdAt: String!
    avatar: String
    Chamber: String
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
    getServices: [Services]

    getPost(postId: ID!): Post
    deleteServices(id: ID!):Services!
    getMember: [Member]
    deleteMember(id: ID!): Member
    getUser:User!
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
    deleteServices(id: ID ): Services
    addChambers(id:String!): Services!
    addChamberToMember(id:String! , memberId:ID):Member!
 
  }
  type Subscription {
    newPost: Post!
  }
`;


cron.schedule('* * * * *', async  () => {

   try {
    const member = await Member.find({})
    console.log(member)
   
    member.forEach((element:any) => {
     
      console.log(element.Chamber)
    });

   } catch (error) {

    console.log(error)
     
   }
   
});
