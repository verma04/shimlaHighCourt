// const { default: gql } = require('graphql-tag');
const { Servcies } = require('../models/Services');
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
    role:String!
    
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


// cron.schedule("*/2 * * * *", async  () => {

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



// cron.schedule("*/2 * * * *", async  () => {

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
