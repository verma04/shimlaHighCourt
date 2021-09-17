const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const { validateRegisterInput, validateLoginInput } = require('../../util/validators');
const checkAuth = require('../../util/checkAuth');
const Member = require('../../models/Member');

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
  Mutation: {
    // async loginMember(_, { username, password }) {
    //   const { errors, valid } = validateLoginInput(username, password);

    

    //   // input validation issues
    //   if (!valid) {
    //     throw new UserInputError('Errors', { errors });
    //   }

    //   const user = await User.findOne({ email:username });
  
   

    //   // wrong username
    //   if (!user) {
    //     errors.general = 'User not found';
    //     throw new UserInputError('User not found', { errors });
    //   }

    //   // wrong password
    //   const match = await bcrypt.compare(password, user.password);
    //   if (!match) {
    //     errors.general = 'Wrong credentials';
    //     throw new UserInputError('Wrong credentials', { errors });
    //   }

    //   // login is good, issue the user a token
    //   const token = generateToken(user);

    //   return {
    //     ...user._doc,
    //     id: user._id,
    //     token,
    //   };
    // },
    async registerMember(_,  { username, email, password, confirmPassword  , gender}, context) {
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
