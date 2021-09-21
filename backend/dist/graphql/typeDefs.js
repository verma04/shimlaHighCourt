"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { default: gql } = require('graphql-tag');
const Member_1 = require("../models/Member");
const { gql } = require('apollo-server');
const cron = require('node-cron');
module.exports = gql `
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

  type Chamber {
 
    member: String!
  
    
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
    addChambers(member:String!): [Chamber]!
 
  }
  type Subscription {
    newPost: Post!
  }
`;
cron.schedule('* * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield Member_1.Member.find({});
        console.log(member);
        member.forEach((element) => {
            console.log(element.avatar);
        });
    }
    catch (error) {
        console.log(error);
    }
}));
//# sourceMappingURL=typeDefs.js.map