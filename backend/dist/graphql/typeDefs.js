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
const { Servcies } = require('../models/Services');
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
  type Parking {
    id: ID!
    createdAt: String!
    memberId: String!
    parkingCharge: String!
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
    role:String!
    
  }

  type Chamber {
 
    member: String!
    id: ID!
    chamberId: String!
    
  }
  type Activity {

 id: ID!
 message: String!
 createdAt: String!
}
  

  type Member {
    id: ID!
    email: String!
    gender: String!
    username: String!
    createdAt: String!
    avatar: String
    Chamber: String
    chamberDet : [ChamberDet]
    notifcations: [Notifications]!

  }


  type Notifications {
    id: ID!
    type: String!
    createdAt: String!
    message: String!
 

  }

  type ChamberDet {
    id: ID!
    month: String!
    payment: String!
    chamberId: String!
    status: String!
    createdAt: String!
 

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
    getChamber: [Chamber]
    getPost(postId: ID!): Post
    deleteServices(id: ID!):Services!
    getMember: [Member]
    deleteMember(id: ID!): Member
    getUser:User!
    getParking: [Parking]!
    getActivity:[Activity]!
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
    createParking( memberId: String! ,parkingCharge:String! ):Parking!
 
  }
  type Subscription {
    newPost: Post!
  }
`;
cron.schedule("* * */2 * *", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield Member_1.Member.find({});
        member.forEach((element) => {
            const data = element.chamberDet.filter((element1) => element1.status === "Due");
            data.forEach((element) => {
                const data1 = {
                    type: "Red",
                    message: `Payment due ${element.month}`
                };
                console.log(element);
                Member_1.Member.findOneAndUpdate({ Chamber: element.chamberId }, { $push: { "notifcations": data1 } }, { new: true }, (err, doc) => {
                    if (err) {
                        console.log(err);
                    }
                });
            });
        });
    }
    catch (error) {
        console.log(error);
    }
}));
cron.schedule("* * */2 * *", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield Member_1.Member.find({});
        member.forEach((element) => __awaiter(void 0, void 0, void 0, function* () {
            const ser = yield Servcies.findOne({ servicesName: "Chambers" });
            const data = ser.servcieList.filter((element1) => element1.chamberId === element.Chamber);
            data.forEach((element2) => __awaiter(void 0, void 0, void 0, function* () {
                let mem = yield Member_1.Member.findOne({ Chamber: element2.chamberId });
                const dateObj = new Date();
                const data = {
                    month: dateObj.toLocaleString("default", { month: "long" }),
                    payment: "dssd",
                    status: "Due",
                    chamberId: element2.chamberId,
                    createdAt: new Date().toISOString(),
                };
                Member_1.Member.findOneAndUpdate({ Chamber: element2.chamberId }, { $push: { "chamberDet": data } }, { new: true }, (err, doc) => {
                    if (err) {
                        console.log(err);
                    }
                });
            }));
        }));
    }
    catch (error) {
        console.log(error);
    }
}));
//# sourceMappingURL=typeDefs.js.map