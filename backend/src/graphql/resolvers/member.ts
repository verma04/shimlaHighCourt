const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const { validateRegisterInput, validateLoginInput } = require('../../util/validators');
const checkAuth = require('../../util/checkAuth');
const { Member } = require('../../models/Member');
const { Servcies } = require('../../models/Services');
const { Activity } = require('../../models/Activity');

const { Payments } = require('../../models/payments');
function generateToken(user:any) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    `"sddsdds"`,
    { expiresIn: '1h' }
  );
}

const MemberResolvers  = {


  Query: {
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


    async getMembers(_:any,   { body }:any, context:any) {

      // const user = checkAuth(context);
      // Validate user data
      // const user = checkAuth(context);
    try {
      const member = await Member.find({});
         return member
    }
    catch (err) {
        console.log(err)
    }
  },
   

  async getMember(_:any ,{}, context:any) {

    const {id} = checkAuth(context);



    return Member.findOne({id})

  },

 
  },
  Mutation: {
 
    async registerMember(_:any,  { username, email, password, confirmPassword  , gender}:any, context:any) {
      // Validate user data
      // const user = checkAuth(context);
    try {
      const { errors, valid } = validateRegisterInput(username, email, password, confirmPassword, gender);

      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      // TODO: Make sure user doesn't already exist
      const user = await Member.findOne({ email });
      if (user) {
        throw new UserInputError('Username is taken', {
          errors: {
            username: 'This email is taken... sorry yo.',
          },
        });
      }

      // Hash the password
      // eslint-disable-next-line no-param-reassign
      password = await bcrypt.hash(password, 12);

      // create the new user with the model and passed in data
      const newUser = new Member({
        email,
        username,
        password,
        gender,
        createdAt: new Date().toISOString(),
        avatar: `https://avatars.dicebear.com/api/${gender}/${username}.svg?background=%230000ff`
      });

      // save the user to the DB
      const res = await newUser.save();
      // Create auth token
      const newActivity = new Activity({
        message:`Member created with email ${email}`,
        createdAt: new Date().toISOString(),
      }) 
    
     
      await   newActivity.save();


      return {
        ...res._doc,
        id: res._id,
       
      };
    }
    catch (err) {
        console.log(err)
    }
  },

  async memberLogin(_:any, { email, password }:any) {
  
    console.log(email, password)




    const user = await Member.findOne({ email});

  
 

  
    if (!user) {
     throw new UserInputError('User not found');
    }

    // wrong password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new UserInputError('Wrong credentials');
    }

    // login is good, issue the user a token
    const token = generateToken(user);

    return {
      ...user._doc,
      id: user._id,
      token,
    };
  },


  async addChamberToMember(   _:any,  { id , memberId} :any, context:any) {
    // Validate user data
    // const user = checkAuth(context);
   interface member  {
      id:Number,
      chamber: String


    }

  try {
  
   

    let mem =  await   Member.findOne({Chamber: id})

  if (mem) {
  
    return   new UserInputError('Chamber Already Assign to member')
    
}


    Member.findOneAndUpdate({_id: memberId},{ $set:{ "Chamber": id }} , {new: true , upsert: true }, async function(err:any, doc:any)  {
      if (err) {
         console.log(err)
      }
      await Servcies.findOneAndUpdate({"servicesName": "Chambers", "servcieList.chamberId":id},{ $set: {"servcieList.$.member": memberId } },  { new: true, upsert: true },function(err:any, result:any) {
          if (err) {
          console.log(err)
          } 
        
          
        
          return Member.findOne({id})
        
        
          
        });
    
      
      })
      return Member.findOne({id})
    }
    
  

    
  
  catch (err) {
      console.log(err)
  }
},



async chamberPayment(   _:any,  { data } :any, context:any) {
  

  const {id} = checkAuth(context);


  console.log(id)

try {

 

 
 Member.findOneAndUpdate({_id:'614c84a9adb99617794c195b', "chamberDet._id":data},{ $set: {"chamberDet.$.status": "done" } },  {   "multi": true , new: true, upsert: true },async  function(err:any, result:any) {
  if (err) {
  console.log(err)
  } 

  const newpayment =  new Payments ({
    memberId:id,
    price:"1000",
    createdAt: new Date().toISOString(),

  })

   const data1 = await newpayment.save()


   console.log(data1)

   const newActivity =  new Activity ({
  message:`Payment Recivied with id ${data} `,
    createdAt: new Date().toISOString(),

  })

    await newpayment.save()


   console.log(data1)
  
});
return Member.findOne({id})
  }
  


  

catch (err) {
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