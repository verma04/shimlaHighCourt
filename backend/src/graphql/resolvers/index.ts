const postsResolvers = require('./posts');
const { usersResolvers } = require('./users');
const  { ServicesResolvers } = require('./Services');
const { MemberResolvers } = require('./member');
const { parkingResolvers } = require('./parking');
const { activityResolvers } = require('./activites')
const { paymentsResolvers } = require('./Payments')
module.exports = {
  // modifier - the name of the type, and each time ANY mutation or subscription that returns a post, it will go through this modifier and apply these modifications
  // Post: {
  //   likeCount: (parent) => parent.likes.length,
  //   commentCount: (parent) => parent.comments.length,
  // },
  Query: {
    ...usersResolvers.Query,
    ...ServicesResolvers.Query,
    ...MemberResolvers.Query,
    ...parkingResolvers.Query,
    ...activityResolvers.Query,
    ...paymentsResolvers.Query,

  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...ServicesResolvers.Mutation,
    ...MemberResolvers.Mutation,
    ...parkingResolvers.Mutation
  },
  Subscription: {
    ...postsResolvers.Subscription,
    
  },
};
