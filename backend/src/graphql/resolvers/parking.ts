const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
const checkAuth = require('../../util/checkAuth');
const { validateRegisterInput, validateLoginInput } = require('../../util/validators');
const { Parking } = require('../../models/Parking');

const { v4: uuidv4 } = require('uuid');
function generateToken(user:any) {
  return jwt.sign(
    {
      id: user.id,
   
    },
    `"sddsdds"`,
    { expiresIn: '1h' }
  );
}

const parkingResolvers = {

    Query: {
        async getParking(_:any, body:any, context:any) {
          
    
    
            try {
                 
            
                return  Parking.find({});
              
               
    
        }
        catch (err) {
            console.log(err)
        }
    
    },
       
      },

  Mutation: {
    async createParking(_:any, { memberId ,parkingCharge  }:any, context:any) {
      
  console.log(memberId, parkingCharge)

        try {
             
        
            const member = await Parking.findOne({memberId:memberId });
          
            if(member) {
                return   new UserInputError('Parking AllReday Alloted To user')
                
            }
  
            const newParking =  new Parking({
                memberId,
                parkingCharge,
                createdAt: new Date().toISOString(),
            });


           

            const res = await newParking.save();
            console.log(res)
            return res

    }
    catch (err) {
        console.log(err)
    }

},
   
  },
}

export { parkingResolvers }

