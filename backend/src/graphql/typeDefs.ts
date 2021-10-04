// const { default: gql } = require('graphql-tag');
const { Servcies } = require('../models/Services');
import { POINT_CONVERSION_COMPRESSED } from "constants";
import { Member } from "../models/Member";
const { gql } = require('apollo-server');
const cron = require('node-cron');
const {ObjectId} = require('mongodb'); 
// const { Parking } = require('../models/Parking');
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
    servicesItems: String!,
      servicesPrice: String!,
      servicesInterval: String!,
      servicesDescription: String!
      uniq: String
      
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
     id: ID!
    chamberId: String!,
    username:String!,
    avatar:String!
    email:String!
    
  }
  type Activity {

 id: ID!
 message: String!
 createdAt: String!
 topic: String!


}
  

type Payments {
  id: ID!
status: String!
createdAt: String!
month:String
list: [paymentList]
}

type paymentList {
  serviceName: String!
serviceId:  String,

price: String

}
 

  type Member {
    id: ID!
    email: String!
    gender: String!
    username: String!
    createdAt: String!
    avatar: String
    role: String!
    Chamber: String
    token: String
    fullname:String,
      memberDescription: String
      slug: String
      phone: String
      address: String
      status:String
      services: [servicesList]
  }


  type Notifications {
    id: ID!
    type: String
    createdAt: String
    message: String
 

  }

  type ChamberDet {
    id: ID!
    month: String!
    payment: String!
    chamberId: String!
    status: String!
    createdAt: String!
 

  }

type servicesList {
  id:ID!,
  createdAt:String,
  servicesName: String,
  servicesPrice: String,
  uniq: String
  userId: String
}

type assign {
  id:ID!,
  arr: [servicesList]
}

type notifications {
id: ID!
  message: String!
    topic: String!
    createdAt: String!
  
}

type comment {
  name: String
    time: String
    answer: String
    status: String
    

}
type ticket {
id:ID
  ticketTitle: String
  status: String
  createdAt: String
  editedAt: String
   member:ID
  comment : [comment ]

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
    userServices(id:ID): [servicesList]
    getUserServices: [servicesList]
    getServices: [Services]
    getMemberByid(id:ID!): Member
    getChamber: [Chamber]
    getPost(postId: ID!): Post
    deleteServices(id: ID!):Services!
    getMembers: [Member]
   
    getUser:User!
  getMember: Member!

    getActivity:[Activity]!
    duePayment: [Due]!
    getpayments: [Payments]!
    notifications: [Notifications]
    getUserPayments:[Payments]
    getUserticket:[ticket]
    getticket:[ticket]
    getUserticketById(id: String):ticket
    getUserActivities: [Activity]
  }
  type Mutation {
    register(   username: String! password: String! confirmPassword: String! email: String!, phone: String!): User!
    registerMember(
      username: String!,
     email: String!,
      address: String!, 
      phone: String!,
       gender: String!
       fullname:String,
       memberDescription: String

     ): Member!
     editMember(
      id: ID
      username: String!,
     email: String!,
      address: String!, 
      phone: String!,
       gender: String!
       fullname:String,
       memberDescription: String
       status: String
     ): Member!
    login(username: String!, password: String!): User!
    memberLogin(email: String!, password: String!): Member!
    createServices(
      servicesName: String!,
      servicesItems: String!,
      servicesPrice: String!,
      servicesInterval: String!,
      servicesDescription: String!
   
    
    ): Services!
    deleteFinnaceServices(id: ID ): Services
    addChambers(id:String!, price:String!): Chamber!
    # addChamberToMember(id:String! , memberId:ID!):Chamber!

    # chamberPayment(data:ID! ):Member!
    assignServices(_id:ID!, userId: String): assign 
    deleteUserServices(_id:ID!, userId: String): assign
    addticket(ticketTitle: String! ,  answer: String!):ticket
    getUserticketByIdComment(id: String!, answer: String!):ticket
    getUserticketByIdClose(id: String!, status: String!):ticket
    getUserticketByIdCommentAdmin(id: String!, answer: String!):ticket
    deleteMember(id: ID!): Member
  }

`;

//Notificatons
// cron.schedule("* * * * *", async  () => {

//    try {
//     const member = await Member.find({})

 
    
//        member.forEach((element:any) => {


//         const data  =  element.paymentBilling.find((element1:any) => element1.status === "Due" )   

//                const data1 = {
//              type:"Red",
//               message:`Payment due ${data.month}`,
//      createdAt: new Date().toISOString(),
//            }
       
//      console.log(data1 , element.id)

//      console.log(element)
//      Member.findOneAndUpdate({_id: element.id},{ $push:{ "notifcations": data1 }} , {new: true}, (err:any, doc:any) => {
//        if (err) {
//           console.log(err)
//        }
//        console.log(doc)
//       })
      

         
//        });
      

     


    

//    } catch (error) {

//     console.log(error)
     
//    }
   
// });






//Services
// cron.schedule("* * * * *", async  () => {

//   try {
   
//     const date = new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getUTCFullYear()
//     const member = await Member.find({})


//     const arr:any[] = []
  
  
//     const ser =  await   Servcies.find({})
  


//     const   addServices =  async () => {
//       await member.forEach( async (element:any) => {
         
//         element.services.forEach((element2:any) => {
       
    
//           const data = {
//              memberid:element.id,
//              _id:element2._id
  
  
//           }
  
//           arr.push(data)
  
       
//         });
          
//       });
      
//       const fin:any[] = []
  
//    await   arr.forEach(  async (set:any) => {
//         const data1 = await ser.find((elment:any) =>  elment.id  === set._id )
  
       
   
  
//         const data12 = {
//           price: data1.servicesPrice,
//           serviceName: data1.servicesName,
//           serviceId:data1.id,
//           memberId:set.memberid
        
  
//         }  
  
//         const member =  await Member.findOneAndUpdate({_id:set.memberid  , "paymentBilling.month": date },{  $push: { "paymentBilling.$.list": data12 }   },  { new: true, upsert: true }).exec()
  
//         console.log(member)
  
     
     
  
  
          
       
//       });
  
  

//     }



//     const   addMonth =  async () => {
//     const member = await Member.find({})


//     // console.log(member)
  


//   const arr:any[] = []
//     const ser =  await   Servcies.find({})

    
     
//    await  member.forEach(async  (element:any) => {

  
//     const fin = {
//       status: "Due",
//       createdAt: new Date().toISOString(),
//       month : date,
     
     
//     }


//          Member.findOneAndUpdate({_id: element.id},{ $push:{ "paymentBilling": fin }} , {new: true}, (err:any, doc:any) => {
//         if (err) {
//            console.log(err)
//         }

      
//         console.log(doc)

//       })

//     })

 


//     }


//     await addMonth()
//     await addServices()
 


 



    
//   } catch (error) {

 
//    console.log(error) 
//   }
  
// });


