const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const { validateRegisterInput, validateLoginInput } = require('../../util/validators');

const { User } = require('../../models/User');
const checkAuth = require('../../util/checkAuth');
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

 const usersResolvers = {
   Query: {
    async getUser(_:any ,{}, context:any) {

      const {email} = checkAuth(context);



      return User.findOne({email})
  
    }
   },
  Mutation: {

  
    async login(_:any, { username, password }:any) {
  
      console.log(username, password)

      const { errors, valid } = validateLoginInput(username, password);

    

      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }


      const user = await User.findOne({ email:username });
  
   

      // wrong username
      if (!user) {
        errors.general = 'User not found';
        throw new UserInputError('User not found', { errors });
      }

      // wrong password
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = 'Wrong credentials';
        throw new UserInputError('Wrong credentials', { errors });
      }

      // login is good, issue the user a token
      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    async register(_:any, { username, email, password, confirmPassword , avatar }:any ) {
      // Validate user data
      const { errors, valid } = validateRegisterInput(username, email, password, confirmPassword);

      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      // TODO: Make sure user doesn't already exist
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError('Username is taken', {
          errors: {
            username: 'This username is taken... sorry yo.',
          },
        });
      }

      // Hash the password
      // eslint-disable-next-line no-param-reassign
      password = await bcrypt.hash(password, 12);

      // create the new user with the model and passed in data
      const newUser = new User({
        email,
        avatar,
        username,
        password,
        createdAt: new Date().toISOString(),
      });

      // save the user to the DB
      const res = await newUser.save();
      // Create auth token
      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};


export {usersResolvers}