const postsResolvers = require('./posts');
const { usersResolvers } = require('./users');
const { ServicesResolvers } = require('./Services');
const { MemberResolvers } = require('./member');
const { parkingResolvers } = require('./parking');
const { activityResolvers } = require('./activites');
module.exports = {
    // modifier - the name of the type, and each time ANY mutation or subscription that returns a post, it will go through this modifier and apply these modifications
    // Post: {
    //   likeCount: (parent) => parent.likes.length,
    //   commentCount: (parent) => parent.comments.length,
    // },
    Query: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, usersResolvers.Query), ServicesResolvers.Query), MemberResolvers.Query), parkingResolvers.Query), activityResolvers.Query),
    Mutation: Object.assign(Object.assign(Object.assign(Object.assign({}, usersResolvers.Mutation), ServicesResolvers.Mutation), MemberResolvers.Mutation), parkingResolvers.Mutation),
    Subscription: Object.assign({}, postsResolvers.Subscription),
};
//# sourceMappingURL=index.js.map