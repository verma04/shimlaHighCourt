const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const ServicesResolvers = require('./Services');

module.exports = {
  // modifier - the name of the type, and each time ANY mutation or subscription that returns a post, it will go through this modifier and apply these modifications
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...ServicesResolvers.Mutation
 
  },
  Subscription: {
    ...postsResolvers.Subscription,
    
  },
};
