const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
const checkAuth = require('../../util/checkAuth');
const { validateRegisterInput, validateLoginInput } = require('../../util/validators');
const { Member } = require('../../models/Member');
const { Servcies } = require('../../models/Services');
const { v4: uuidv4 } = require('uuid');
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

const ServicesResolvers = {
  Query: {
    async getServices(_:any, { body }:any, context:any) {
     
     
      // const user = checkAuth(context);

      try {
        const services = await Servcies.find().sort({ createdAt: -1 });
        return services;
      } catch (err) {
        throw new Error(err);
      }
    },

    async deleteServices(_:any, { id }:any, context:any) {
      

      // const user = checkAuth(context);
      try {
           
      const data  = Servcies.findOneAndDelete({_id:id})
     
      return data
    
     
    
    }
    catch (err) {
      console.log(err)
    }
    
    }
    },
  Mutation: {
    async createServices(_:any, { servicesName }:any, context:any) {
      
  

        try {
             
            const ser = await  Servcies.findOne({servicesName})
              
            

            if(ser) {
                return   new UserInputError('Service Exist')
                
            }

        const newUser = new  Servcies({
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


async addChambers(_:any, { id }:any, context:any) {
      
  

  try {
       
      
        const data = {
          createdAt: new Date().toISOString(),
          chamberId:uuidv4()
        }
   
   
      Servcies.findOneAndUpdate({servicesName: "Chambers"},{ "$push":{ "servcieList": data }} , {new: true}, (err:any, doc:any) => {
        if (err) {
           console.log(err)
        }
    
        
    });
  
  //   Member.findOneAndUpdate({_id: member},{ "$set":{ "Chamber": data }} , {new: true}, (err:any, doc:any) => {
  //     if (err) {
  //         console.log("Something wrong when updating data!");
  //     }
  
      
  // });

    return Servcies.findOne({servicesName: "Chambers"})
    

}
catch (err) {
  console.log(err)
}

},

   
  },
}

export { ServicesResolvers }

