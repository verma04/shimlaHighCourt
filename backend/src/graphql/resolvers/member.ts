const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const { validateRegisterInput, validateLoginInput } = require('../../util/validators');
const checkAuth = require('../../util/checkAuth');
const { Member } = require('../../models/Member');

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
     
      const user = checkAuth(context);
 

      try {
         
  
        const member = await Member.findByIdAndRemove({ _id:id });

        return member
      } catch (err) {
        throw new Error(err);
      }
    },


    async getMember(_:any,   { body }:any, context:any) {

      const user = checkAuth(context);
      // Validate user data
      // const user = checkAuth(context);
    try {
      const member = await Member.find({  });
         return member
    }
    catch (err) {
        console.log(err)
    }
  },
   
  },
  Mutation: {
 
    async registerMember(_:any,  { username, email, password, confirmPassword  , gender}:any, context:any) {
      // Validate user data
      const user = checkAuth(context);
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
      

      return {
        ...res._doc,
        id: res._id,
       
      };
    }
    catch (err) {
        console.log(err)
    }
  },
}

};


export { MemberResolvers}