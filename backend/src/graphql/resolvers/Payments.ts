const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
const checkAuth = require('../../util/checkAuth');
const { validateRegisterInput, validateLoginInput } = require('../../util/validators');
const { Payments } = require('../../models/payments');

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

const paymentsResolvers = {

    Query: {
        async getpayments(_:any, body:any, context:any) {
          
    
    
            try {
                 
            
                return  Payments.find({});
              
               
    
        }
        catch (err) {
            console.log(err)
        }
    
    },
       
      },

 
}

export { paymentsResolvers }

