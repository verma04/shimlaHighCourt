const Event = require('../../database/models/Events');
const Cafe = require('../../database/models/Cafes');
const City = require('../../database/models/Citys');
const { compareSync } = require('bcryptjs');
exports.cityQueries = {
  city: (root, {id}, ctx) => {
    return City.getById(id);
  },
  cities: (root, args, ctx) => {
    return City.find({});
  },
  filterCity: (root, {id}, ctx) => {
    return City.findOne({ cityName: id  })
 
  }
}
exports.cafeQueries = {
  cafe: (root, {id}, ctx) => {

   return   Cafe.findOne({slug: id})
    // return (Cafe.findById({slug: id}))
  },
  cafes: (root, args, ctx) => {
    return Cafe.find({});
  },
  filterCafes: (root, {id}, ctx) => {
    return Cafe.find({location: id} );
  },
}

exports.eventsQueries = {
  event: (root, {id}, ctx) => {
   return (Event.findById(id))
  },
  events: (root, args, ctx) => {
    return Event.find({});
  }
}

exports.cityMutations = {
  createCity: async (root, {input}) => {
    const createdPortfolio = await City.create(input);
    return createdPortfolio
  },

}

exports.cafeMutations = {
  createCafe: async (root, {input}, ctx) => {
    const createdPortfolio = await Cafe.create(input);
    return createdPortfolio
  },

}

exports.eventsMutations = {
  createEvents: async (root, {input}) => {
    const createdPortfolio = await Event.create(input);
    return createdPortfolio

  },

}



exports.userQueries = {
  user: (root, args, ctx) => {
    return ctx.models.User.getAuthUser(ctx);
  },
dogs : (root, args, ctx) => {
  return ctx.models.User.getAuthUser(ctx);
  }
}

exports.userMutations = {
  signUp: async (root, { input }, ctx) => {
    const registeredUser = await ctx.models.User.signUp(input);
    return registeredUser._id;
    console.log(registeredUser)
  },
  signIn: (root, { input }, ctx) => {
    return ctx.models.User.signIn(input, ctx);
  },
  signOut: (root, args, ctx) => {
    return ctx.models.User.signOut(ctx);
  }
}
