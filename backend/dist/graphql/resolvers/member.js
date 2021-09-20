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
exports.MemberResolvers = void 0;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
const { validateRegisterInput, validateLoginInput } = require('../../util/validators');
const checkAuth = require('../../util/checkAuth');
const { Member } = require('../../models/Member');
function generateToken(user) {
    return jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username,
    }, `"sddsdds"`, { expiresIn: '1h' });
}
const MemberResolvers = {
    Query: {
        deleteMember(_, { id }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = checkAuth(context);
                try {
                    const member = yield Member.findByIdAndRemove({ _id: id });
                    return member;
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        getMember(_, { body }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = checkAuth(context);
                // Validate user data
                // const user = checkAuth(context);
                try {
                    const member = yield Member.find({});
                    return member;
                }
                catch (err) {
                    console.log(err);
                }
            });
        },
    },
    Mutation: {
        registerMember(_, { username, email, password, confirmPassword, gender }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                // Validate user data
                const user = checkAuth(context);
                try {
                    const { errors, valid } = validateRegisterInput(username, email, password, confirmPassword, gender);
                    if (!valid) {
                        throw new UserInputError('Errors', { errors });
                    }
                    // TODO: Make sure user doesn't already exist
                    const user = yield Member.findOne({ email });
                    if (user) {
                        throw new UserInputError('Username is taken', {
                            errors: {
                                username: 'This email is taken... sorry yo.',
                            },
                        });
                    }
                    // Hash the password
                    // eslint-disable-next-line no-param-reassign
                    password = yield bcrypt.hash(password, 12);
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
                    const res = yield newUser.save();
                    // Create auth token
                    return Object.assign(Object.assign({}, res._doc), { id: res._id });
                }
                catch (err) {
                    console.log(err);
                }
            });
        },
    }
};
exports.MemberResolvers = MemberResolvers;
//# sourceMappingURL=member.js.map