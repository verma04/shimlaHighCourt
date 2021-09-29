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
var mongoose = require('mongoose');
function generateToken(user) {
    return jwt.sign({
        id: user.id,
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
        getChamber(_, { body }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                // const user = checkAuth(context);
                try {
                    const services = yield Servcies.findOne({ servicesName: "Chambers" });
                    const data = services.servcieList;
                    const data2 = yield Member.find({});
                    const final = [];
                    yield data.forEach((element) => __awaiter(this, void 0, void 0, function* () {
                        if (data2.find((element2) => element2.id === element.member)) {
                            const found = data2.find((element2) => element2.id === element.member);
                            const arr = yield {
                                "username": found.username,
                                "email": found.email,
                                "avatar": found.avatar,
                                "id": element.id,
                                "chamberId": element.chamberId,
                            };
                            final.push(arr);
                        }
                        else if (data2.find((element2) => element2.id !== element.member)) {
                            const arr = yield {
                                "username": "empty",
                                "email": "empty",
                                "avatar": "empty",
                                "id": element.id,
                                "chamberId": element.chamberId,
                            };
                            final.push(arr);
                        }
                    }));
                    return final;
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
        createServices(_, { servicesName, servicesItems, servicesPrice, servicesInterval, servicesDescription }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(servicesName);
                try {
                    const ser = yield Servcies.findOne({ servicesName });
                    if (ser) {
                        return new UserInputError('Service Exist');
                    }
                    const newUser = new Servcies({
                        servicesName,
                        servicesItems,
                        servicesPrice,
                        servicesInterval,
                        servicesDescription,
                        uniq: 'id' + (new Date()).getTime(),
                        createdAt: new Date().toISOString()
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
        addChambers(_, { id, price }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const ser = yield Servcies.findOne({ servicesName: "Chambers" });
                    const found = ser.servcieList.find((element) => element.chamberId === id);
                    if (found) {
                        return new UserInputError('Chamber unique_id already found');
                    }
                    var _id = mongoose.Types.ObjectId();
                    const data = {
                        createdAt: new Date().toISOString(),
                        chamberId: id,
                        price,
                        _id
                    };
                    Servcies.findOneAndUpdate({ servicesName: "Chambers" }, { $push: { "servcieList": data } }, { new: true }, (err, doc) => {
                        if (err) {
                            console.log(err);
                        }
                    });
                    //   Member.findOneAndUpdate({_id: member},{ "$set":{ "Chamber": data }} , {new: true}, (err:any, doc:any) => {
                    //     if (err) {
                    //         console.log("Something wrong when updating data!");
                    //     }
                    // });
                    const send = {
                        "username": "empty",
                        "email": "empty",
                        "avatar": "empty",
                        "id": _id,
                        "chamberId": id,
                    };
                    return send;
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