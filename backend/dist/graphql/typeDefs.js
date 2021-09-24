"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { default: gql } = require('graphql-tag');
const { Servcies } = require('../models/Services');
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
type Due  {
    month: String!
    payment: String!
    status: String!
    chamberId: String!
    createdAt: String!
    id: ID
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
    token: String
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
    getMembers: [Member]
    deleteMember(id: ID!): Member
    getUser:User!
    getMember: Member
    getParking: [Parking]!
    getActivity:[Activity]!
    duePayment: [Due]!
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
    memberLogin(email: String!, password: String!): Member!
    createServices(servicesName: String!): Services!
    deleteServices(id: ID ): Services
    addChambers(id:String!, price:Int!): Services!
    addChamberToMember(id:String! , memberId:ID!):Member!

    chamberPayment(data:ID! ):Member!
    createParking( memberId: String! ,parkingCharge:String! ):Parking!
 
  }
  type Subscription {
    newPost: Post!
  }
`;
// cron.schedule("* * * * *", async  () => {
//    try {
//     const member = await Member.find({})
//        member.forEach((element:any) => {
//         const data  =  element.chamberDet.filter((element1:any) => element1.status === "Due" )   
//         data.forEach((element:any) => {
//           const data1 = {
//             type:"Red",
//              message:`Payment due ${element.month}`
//              }
//                console.log(element)
//       Member.findOneAndUpdate({Chamber: element.chamberId},{ $push:{ "notifcations": data1 }} , {new: true}, (err:any, doc:any) => {
//         if (err) {
//            console.log(err)
//         }
//      });
//         });
//        });
//    } catch (error) {
//     console.log(error)
//    }
// });
// cron.schedule("* * * * *", async  () => {
//   try {
//     const member = await Member.find({})
//     member.forEach(async  (element:any) => {
//       const ser =  await     Servcies.findOne({servicesName: "Chambers"})
//    const data  =  ser.servcieList.filter((element1:any) => element1.chamberId === element.Chamber )   
//     data.forEach( async ( element2:any) => {
//       let mem =  await   Member.findOne({Chamber: element2.chamberId})
//       const dateObj = new Date()
//       const data = {
//       month : dateObj.toLocaleString("default", { month: "long" }),
//       payment: "dssd",
//       status: "Due",
//       chamberId:element2.chamberId,
//       createdAt: new Date().toISOString(),
//       }
//       Member.findOneAndUpdate({Chamber: element2.chamberId},{ $push:{ "chamberDet": data }} , {new: true}, (err:any, doc:any) => {
//         if (err) {
//            console.log(err)
//         }
//     });
//     });
//     });
//   } catch (error) {
//    console.log(error) 
//   }
// });
//# sourceMappingURL=typeDefs.js.map