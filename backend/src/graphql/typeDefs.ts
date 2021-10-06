// const { default: gql } = require('graphql-tag');
const { Servcies } = require('../models/Services');
import { POINT_CONVERSION_COMPRESSED } from "constants";

import { Member } from "../models/Member";
const { gql } = require('apollo-server');
const cron = require('node-cron');
const {ObjectId} = require('mongodb'); 
const {  PaymentSchedule } = require('../models/PaymentSchedule')
var uuid = require('uuid');
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
type pay {
  id: ID!
  totalmoney: String
   paymentId: String
  status:String
  serviceID:String
  month: String
  createdAt: String
  paymentBilling: [paymentList]

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
    getpayments: [pay]!
    notifications: [Notifications]
    getUserPayments:[Payments]
    getUserticket:[ticket]
    getticket:[ticket]
    getUserticketById(id: String):ticket
    getUserActivities: [Activity]
    userAllPayments: [pay]
   
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

    servicepayment(  payment_id: String ,  userid: String ,  serviceID: String!): pay
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
cron.schedule("0 */45 * * * *", async  () => {

  try {
   
    
    const date = new Date().toISOString()
    const  uniq = uuid.v4();
    const member = await Member.find({})
   const ser =await Servcies.find({})

  
 await    member.forEach( async  (element:any)=> {

      

        const fin = new PaymentSchedule  ({
        status: "Due",
        createdAt: new Date().toISOString(),
        month : date,
        uniq,
        member: element._id,
       
      })

      const  data =  await  fin.save()
     

      // console.log(data)

     });

    
    const arr:any[] = []


      

  // await  paySeh.forEach(  async (element:any) => {

  //   // console.log(element.member)
     
  //   // console.log(member)
    

  // const filter = await Member.find({id: element.member })

 

  //   });

  const paySeh = await PaymentSchedule.find({})

  await member.forEach((element:any)=> {



    PaymentSchedule.find({$and:[  {member:element._id}  ,{     uniq:uniq}]}, function(err:any, user:any) 
 {
    if (err)
    {
console.log(err)
    }
   

    

    element.services.forEach(async (set:any) => {

     
    const data1 = await ser.find((elment:any) =>  elment.id  === set._id )

    console.log(data1 , uniq)

    const data12 = {
                price: data1.servicesPrice,
                serviceName: data1.servicesName,
                serviceId:data1.id,
                memberId:set.memberid
              }  

              PaymentSchedule.findOneAndUpdate({$and:[  {member:element._id}  ,{     uniq:uniq}]} , {  $push: { "list": data12 }   }, function(err:any, user:any) 
              {
                 if (err)
                 {
             console.log(err)
                 }

                 console.log(user)
   
                })
            

              //         try {
     
          
//           Member.findOneAndUpdate({_id:set.memberid  , "paymentBilling.uniq": uniq },{  $push: { "paymentBilling.$.list": data12 }   },  {  multi: true , new: true, upsert: true }, (err:any, doc:any) => {
//             if (err) {
//               console.log(set.memberid , uniq )
//                throw err
//             }
        
//             console.log(doc)
        
//           })
          
//         }
//         catch (err) {
//           throw err
//         }
      
    });

  

 });

  });
   
  
 



    
  } catch (error) {

 
   console.log(error) 
  }
  
});