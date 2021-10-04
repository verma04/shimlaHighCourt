const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
const checkAuth = require('../../util/checkAuth');
const { validateRegisterInput, validateLoginInput } = require('../../util/validators');

const Services = require('../../models/Services');

function generateToken(user) {
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

module.exports = {
  Query: {
    async getServices(_, { body }, context) {
     
      const user = checkAuth(context);


      try {
        const services = await Services.find().sort({ createdAt: -1 });
        return services;
      } catch (err) {
        throw new Error(err);
      }
    },
    },
  Mutation: {
    async createServices(_, { servicesName }, context) {
      
      const user = checkAuth(context);

        try {
             
            const ser = await Services.find({servicesName})
            
            if(ser) {
                return   new UserInputError('Service Exist')
                
            }

        const newUser = new Services({
         servicesName,
            createdAt: new Date().toISOString(),
          });
    
          // save the user to the DB
          const res = await newUser.save();
  
          console.log(res)

          return    res
          
 
    }
    catch (err) {
        console.log(err)
    }

},

async deleteServices(_, { id }, context) {
      

  const user = checkAuth(context);
  try {
       
  const data  = Services.findOneAndDelete({_id:id})
 
  return data

 

}
catch (err) {
  console.log(err)
}

}
   
  },
}

