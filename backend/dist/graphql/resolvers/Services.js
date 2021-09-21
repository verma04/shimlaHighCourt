"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesResolvers = void 0;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
const checkAuth = require('../../util/checkAuth');
const { validateRegisterInput, validateLoginInput } = require('../../util/validators');
const { Member } = require('../../models/Member');
const { Servcies } = require('../../models/Services');
const { v4: uuidv4 } = require('uuid');
function generateToken(user) {
    return jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username,
    }, `"sddsdds"`, { expiresIn: '1h' });
}
const ServicesResolvers = {
    Query: {
        getServices(_, { body }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                // const user = checkAuth(context);
                try {
                    const services = yield Servcies.find().sort({ createdAt: -1 });
                    return services;
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        deleteServices(_, { id }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                // const user = checkAuth(context);
                try {
                    const data = Servcies.findOneAndDelete({ _id: id });
                    return data;
                }
                catch (err) {
                    console.log(err);
                }
            });
        }
    },
    Mutation: {
        createServices(_, { servicesName }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const ser = yield Servcies.findOne({ servicesName });
                    if (ser) {
                        return new UserInputError('Service Exist');
                    }
                    const newUser = new Servcies({
                        servicesName,
                        createdAt: new Date().toISOString(),
                    });
                    // save the user to the DB
                    const res = yield newUser.save();
                    console.log(res);
                    return res;
                }
                catch (err) {
                    console.log(err);
                }
            });
        },
        addChambers(_, { id }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const data = {
                        createdAt: new Date().toISOString(),
                        chamberId: uuidv4()
                    };
                    Servcies.findOneAndUpdate({ servicesName: "Chambers" }, { "$push": { "servcieList": data } }, { new: true }, (err, doc) => {
                        if (err) {
                            console.log(err);
                        }
                    });
                    //   Member.findOneAndUpdate({_id: member},{ "$set":{ "Chamber": data }} , {new: true}, (err:any, doc:any) => {
                    //     if (err) {
                    //         console.log("Something wrong when updating data!");
                    //     }
                    // });
                    return Servcies.findOne({ servicesName: "Chambers" });
                }
                catch (err) {
                    console.log(err);
                }
            });
        },
    },
};
exports.ServicesResolvers = ServicesResolvers;
//# sourceMappingURL=Services.js.map