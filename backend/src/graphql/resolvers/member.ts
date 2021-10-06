const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
const { UserInputError } = require('apollo-server');
var slugify = require('slugify')
const { validateRegisterInput, validateLoginInput } = require('../../util/validators');
const checkAuth = require('../../util/checkAuth');
const { Member } = require('../../models/Member');
const { Servcies } = require('../../models/Services');
const { Activity } = require('../../models/Activity');
const {  PaymentSchedule } = require('../../models/PaymentSchedule')
const { Payments } = require('../../models/payments');
function generateToken(user:any) {
  return jwt.sign(
    {
      id: user.id,
  
    },
    `"sddsdds"`,
    { expiresIn: '1h' }
  );
}

const MemberResolvers  = {


  Query: {
  


    async getMembers(_:any,   { body }:any, context:any) {

      // const user = checkAuth(context);
      // Validate user data
      // const user = checkAuth(context);
    try {
      const member = await Member.find({}).sort({createdAt:-1})
         return member
    }
    catch (err) {
        console.log(err)
    }
  },
   

  async getMember(_:any ,{}, context:any) {

    const {id} = checkAuth(context);



    const data =  await Member.findOne({_id:id})
 
    return data

  },
  async getMemberByid(_:any ,{ id }:any, context:any) {

    const data =  await Member.findOne({slug:id})

    return data


  },
  async userServices(_:any ,{ id }:any, context:any) {

 
    const data = await Member.findOne({_id:id})
    // console.log(data.services)


    const ser = await Servcies.find({})
    // console.log(ser)
const arr:string[]= []
  await  data.services.forEach((element:any) => {
   
    //   console.log(ser)
    // console.log(element)

    const data  =  ser.find((element1:any) => element1.id === element._id )  
   arr.push(data)
    });


    return arr

  },
 

  async getUserServices(_:any ,{}:any, context:any) {
 const {id} = checkAuth(context);
 
 console.log(id)
    const data = await Member.findOne({_id:id})
    // console.log(data.services)


    const ser = await Servcies.find({})
    // console.log(ser)
const arr:string[]= []
  await  data.services.forEach((element:any) => {
   
    //   console.log(ser)
    // console.log(element)

    const data  =  ser.find((element1:any) => element1.id === element._id )  
   arr.push(data)
    });


    return arr

  },
  async notifications(_:any ,{  }:any, context:any) {

    const {id} = checkAuth(context);

   


    const data =  await Member.findOne({_id:id})



    return data.notifcations
  },
 
  async getUserPayments(_:any ,{  }:any, context:any) {

    const {id} = checkAuth(context);

   
const data =  await PaymentSchedule.find({member:mongoose.Types.ObjectId(id) , status:"Due"}).sort({createdAt: -1})

  
 return data

  },

  },
  Mutation: {
 
    async registerMember(_:any,  { fullname,  memberDescription, username, email,address, gender,phone}:any, context:any) {


      // Validate user data
      // const user = checkAuth(context);
    try {
      console.log(username ,email, address)
      // const { errors, valid } = validateRegisterInput(username, email, password, confirmPassword, gender);

      // if (!valid) {
      //   throw new UserInputError('Errors', { errors });
      // }

      // // TODO: Make sure user doesn't already exist
      const user = await Member.findOne({ email });
      if (user) {
        return new UserInputError('Email is taken');
      }



      const password = `${username}123`



      // // Hash the password
      // // eslint-disable-next-line no-param-reassign
    const     newpassword = await bcrypt.hash(password, 12);
   const slug =  slugify(fullname, {
      replacement: '-', 
      remove: undefined, 
      lower: true,      
      strict: false,     
      locale: 'vi',  trim: true          })
      // // create the new user with the model and passed in data
      const newUser = new Member({
        email,
        username,
        password:newpassword,
        address,
        gender,
        fullname, 
        memberDescription,
        createdAt: new Date().toISOString(),
       slug,
       phone,
        avatar: `https://avatars.dicebear.com/api/initials/${username}.svg`
      });

      // save the user to the DB
      const res = await newUser.save();
      // Create auth token
      const newActivity = new Activity({
        message:`Member created with email ${email}`,
        createdAt: new Date().toISOString(),
      }) 
    
     
      await   newActivity.save();

      console.log(res)

      return res;
    }
    catch (err) {
        console.log(err)
    }
  },

  async editMember(_:any,  { id , fullname,  memberDescription, username, email,address, gender,phone , status}:any, context:any) {

   
    const user = checkAuth(context);
  try {
   
    // const { errors, valid } = validateRegisterInput(username, email, password, confirmPassword, gender);

    // if (!valid) {
    //   throw new UserInputError('Errors', { errors });
    // }

    // // TODO: Make sure user doesn't already exist
  
 const slug =  slugify(fullname, {
    replacement: '-', 
    remove: undefined, 
    lower: true,      
    strict: false,     
    locale: 'vi',  trim: true          })
    // // create the new user with the model and passed in data
    const editUser  ={
      email,
      username,
      address,
      gender,
      fullname, 
      memberDescription,
      EditedAt: new Date().toISOString(),
     slug,
     phone,

      
    }
  

    

   
    const something =  await  Member.findOneAndUpdate({_id: id},{ $set:{fullname:fullname,address:address,gender:gender, username:username,  memberDescription:memberDescription, email:email, slug:slug,phone:phone  , status:status  }} , {new: true , upsert: true }).exec();

  return something
    
  }
  catch (err) {
      console.log(err)
  }
},

  async memberLogin(_:any, { email, password }:any) {
  
    console.log(email, password)

try {


    const user = await Member.findOne({ email });
  
   

  if (!user) {
     return new UserInputError('User not found');
    }

    if(user.status ==="disabled") {
      return new UserInputError('Account Disabled Contact Administrator');
    }

    // wrong password
    const match = await bcrypt.compare(password, user.password);

    console.log(user.password)
    if (!match) {
      return new UserInputError('Wrong credentials');
    }
  
  

    // // login is good, issue the user a token
    const token = generateToken(user);

    return {
      ...user._doc,
      id: user._id,
      token,
    };
  }
  catch (err) {
    console.log(err)
  }
  },

  async deleteMember(_:any, { id }:any, context:any) {
     
    // const user = checkAuth(context);


    try {
       

      const member = await Member.findByIdAndRemove({ _id:id });
      const data = {
        message:`Member deleted with id ${id}`,
        createdAt: new Date().toISOString(),
      } 
    
      await Activity.create({data})
      return member;



    } catch (err) {
      throw new Error(err);
    }
  },

//   async addChamberToMember(   _:any,  { id , memberId} :any, context:any) {
//     // Validate user data
//     // const user = checkAuth(context);
//    interface member  {
//       id:Number,
//       chamber: String


//     }

//   try {
  
   

//     let mem =  await   Member.findOne({Chamber: id})

//   if (mem) {
  
//     return   new UserInputError('Chamber Already Assign to member')
    
// }


//     Member.findOneAndUpdate({_id: memberId},{ $set:{ "Chamber": id }} , {new: true , upsert: true }, async function(err:any, doc:any)  {
//       if (err) {
//          console.log( err)
//       }
//      Servcies.findOneAndUpdate({"servicesName": "Chambers", "servcieList._id":id},{ $set: {"servcieList.$.member": memberId } },  { new: true, upsert: true }, async  function(err:any, result:any) {
//           if (err) {
//           console.log( "22323" ,err)
//           } 
        
          
        
        
//         });
    
//         const member = await Member.find({}).sort({createdAt:-1})
//          return member
      
//       })


   
      
//     }
    
  

    
  
//   catch (err) {
//       console.log(err)
//   }
// },



// async chamberPayment(   _:any,  { data } :any, context:any) {
  

//   const {id} = checkAuth(context);


//   console.log(id)

// try {

 

 
//  Member.findOneAndUpdate({_id:'614c84a9adb99617794c195b', "chamberDet._id":data},{ $set: {"chamberDet.$.status": "done" } },  {   "multi": true , new: true, upsert: true },async  function(err:any, result:any) {
//   if (err) {
//   console.log(err)
//   } 

//   const newpayment =  new Payments ({
//     memberId:id,
//     price:"1000",
//     createdAt: new Date().toISOString(),

//   })

//    const data1 = await newpayment.save()


//    console.log(data1)

//    const newActivity =  new Activity ({
//   message:`Payment Recivied with id ${data} `,
//     createdAt: new Date().toISOString(),

//   })

//     await newpayment.save()


//    console.log(data1)
  
// });
// return Member.findOne({id})
//   }
  


  

// catch (err) {
//     console.log(err)
// }
// },


async assignServices(   _:any,  { _id  ,  userId} :any, context:any) {
  
  const {id} = checkAuth(context);
  
  console.log(id)

console.log(_id ,  userId)

try {

  const set = {
    _id:_id,
    createdAt: new Date().toISOString(),
  }
  
  await    Member.findOneAndUpdate({_id:userId},{ $push:{ "services": set }} , {new: true}).exec();
    
   

   const data = await    Member.findOne({_id:userId})
    const arr:string[]= []
    const ser = await Servcies.find({})
    await  data.services.forEach((element:any) => {
     
      //   console.log(ser)
      // console.log(element)
  
      const data  =  ser.find((element1:any) => element1.id === element._id )  
     arr.push(data)
      });
  
      const final = {
          id:userId,
          arr:arr
      }
  
      return final;
  


}

catch ( err) {
console.log(err)
}


},


async deleteUserServices(   _:any,  { _id  ,  userId} :any, context:any) {
  
  const {id} = checkAuth(context);
 
  console.log(id)

try {

  await  Member.findOneAndUpdate({_id:userId , },{ $pull: {"services":   {_id:_id} } }, {new: true}).exec();
 

  
 




     const data = await Member.findOne({_id:userId})
     // console.log(data.services)
 

     const ser = await Servcies.find({})
     // console.log(ser)
 const arr:string[]= []
   await  data.services.forEach((element:any) => {
    
     //   console.log(ser)
     // console.log(element)
 
     const data  =  ser.find((element1:any) => element1.id === element._id )  
    arr.push(data)
     });
 
 
     const fin = {
       id:userId,
       arr
     }

   return fin

  
  


}

catch ( err) {
console.log(err)
}


},

// async chamberPayment(_:any ,{}, context:any) {

//   const {id} = checkAuth(context);

// console.log(id)

//   return Member.findOne({id})

// }
}




};


export { MemberResolvers}