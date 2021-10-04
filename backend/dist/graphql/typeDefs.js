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
const { ObjectId } = require('mongodb');
// const { Parking } = require('../models/Parking');
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
payment: String!
status: String!
serviceName: String!
serviceId:  String,
month:String
createdAt: String!
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
    notifications: [notifications]
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
// cron.schedule("16 10 * * *", async  () => {
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
cron.schedule("* * * * *", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield Member_1.Member.find({});
        // console.log(member)
        const arr = [];
        const ser = yield Servcies.find({});
        yield member.forEach((element) => __awaiter(void 0, void 0, void 0, function* () {
            const fin = {
                status: "Due",
                createdAt: new Date().toISOString(),
                month: new Date().toLocaleString("default", { month: "long" }) + " " + new Date().getUTCFullYear(),
            };
            Member_1.Member.findOneAndUpdate({ _id: element.id }, { $push: { "paymentBilling": fin } }, { new: true }, (err, doc) => {
                if (err) {
                    console.log(err);
                }
                console.log(doc);
            });
            const data = element.services;
            //  await  data.forEach((set:any) => {
            //  const data1  = ser.find((element2:any) => element2.id === set.id )
            //  const dateObj = new Date()
            //        const data = {
            //       payment: data1.servicesPrice,
            //       serviceName: data1.servicesName,
            //       serviceId: data1.id
            //       }
            //       arr.push(data)
            //       const fin = {
            //         status: "Due",
            //         createdAt: new Date().toISOString(),
            //         month : dateObj.toLocaleString("default", { month: "long" }) + " " + new Date().getUTCFullYear(),
            //         paymentBilling: arr
            //       }
            //  console.log(fin)
            //   Member.findOneAndUpdate({_id: element.id},{ $push:{ "paymentBilling": fin }} , {new: true}, (err:any, doc:any) => {
            //     if (err) {
            //        console.log(err)
            //     }
            //     console.log(doc)
            //     // });
            //    });
            //     await  ser.forEach(async  (element1:any) => {
            // // console.log(element1._id)
            // console.log(element)
            //         // const data1  = data.filter((element2:any) => element2._id === element1._id ) 
            //         // console.log(data1)
            //       });
        }));
        //  const data  =  ser.servcieList.filter((element1:any) => element1.chamberId === element.Chamber )   
        //   data.forEach( async ( element2:any) => {
        //     let mem =  await   Member.findOne({Chamber: element2.chamberId})
        //     const dateObj = new Date()
        //     const data = {
        //     month : dateObj.toLocaleString("default", { month: "long" }),
        //     payment: "dssd",
        //     status: "Due",
        //     chamberId:element2.chamberId,
        //     createdAt: new Date().toISOString(),
        //     }
        //     Member.findOneAndUpdate({Chamber: element2.chamberId},{ $push:{ "chamberDet": data }} , {new: true}, (err:any, doc:any) => {
        //       if (err) {
        //          console.log(err)
        //       }
        //       console.log(doc)
        //   });
        //   });
    }
    catch (error) {
        console.log(error);
    }
}));
// cron.schedule("59 11 * * *", async  () => {
//   try {
//   const data =await Parking.find({})
//     data.forEach((element:any) => {
//       const dateObj = new Date()
//       const data1 = {
//         month : dateObj.toLocaleString("default", { month: "long" }),
//         payment: "payment",
//         status: "Due",
//         parkingId: element.id,
//         price: element.price,
//         createdAt: new Date().toISOString(),
//         }
//      Member.findOneAndUpdate({_id:element.memberId},{ $push:{ "parkingBilling": data1 }} , {new: true}, (err:any, doc:any) => {
//         if (err) {
//            console.log(err)
//         }
//     console.log(doc)
//   });    
// })
//   } catch (error) {
//    console.log(error) 
//   }
// });
//# sourceMappingURL=typeDefs.js.map