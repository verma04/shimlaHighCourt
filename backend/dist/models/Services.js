"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servcies = void 0;
const { model, Schema } = require('mongoose');
const ServiceSchema = new Schema({
    servicesName: {
        type: String,
        required: true,
    },
    // could add a default here, but prefer to do it on the GQL resolvers
    createdAt: String,
    servcieList: [
        {
            member: {
                type: String,
                default: "empty"
            },
            price: Number,
            chamberId: String,
            createdAt: String,
        },
    ],
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