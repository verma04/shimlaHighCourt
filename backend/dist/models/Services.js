"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servcies = void 0;
const { model, Schema } = require('mongoose');
const ServiceSchema = new Schema({
    servicesName: {
        type: String,
        required: true,
    },
    servicesItems: {
        type: String,
        required: true,
    },
    servicesPrice: {
        type: String,
        required: true,
    },
    servicesInterval: {
        type: String,
        required: true,
    },
    uniq: {
        type: String,
        required: true,
    },
    servicesDescription: {
        type: String,
        required: true,
    },
    // could add a default here, but prefer to do it on the GQL resolvers
    createdAt: String,
    // MongoDB is "schemaless"/NOsql, doesn't have relations, but the ORM itself lets us have relations between our models
    // this lets us automatically populate these fields later if we want using Mongoose methods
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
});
const Servcies = model('Service', ServiceSchema);
exports.Servcies = Servcies;
//# sourceMappingURL=Services.js.map