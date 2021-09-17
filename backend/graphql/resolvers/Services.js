const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

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

    deleteServices: {
        async (_, { body }, context) {
         
          const user = checkAuth(context);
          console.log(user)
    
          try {
         console.log('sdsd')
          } catch (err) {
            throw new Error(err);
          }
        },
        async getPost(_, { postId }) {
          try {
            const post = await Post.findById(postId);
            if (post) {
              return post;
            }
            throw new Error('Post not found');
          } catch (err) {
            throw new Error(err);
          }
        },
      },
  Mutation: {
    async createServices(_, { servicesName }) {
      

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

}
   
  },
}

