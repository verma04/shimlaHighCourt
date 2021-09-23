const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
const checkAuth = require('../../util/checkAuth');
const { validateRegisterInput, validateLoginInput } = require('../../util/validators');
const { Activity } = require('../../models/Activity');

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

const activityResolvers = {

    Query: {
        async getActivity(_:any, body:any, context:any) {
          
    
    
            try {
                 
            
                return  Activity.find({});
              
               
    
        }
        catch (err) {
            console.log(err)
        }
    
    },
       
      },

 
}

export { activityResolvers }

