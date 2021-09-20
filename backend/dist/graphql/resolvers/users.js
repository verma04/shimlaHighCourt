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
exports.usersResolvers = void 0;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
const { validateRegisterInput, validateLoginInput } = require('../../util/validators');
const { User } = require('../../models/User');
const checkAuth = require('../../util/checkAuth');
function generateToken(user) {
    return jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username,
    }, `"sddsdds"`, { expiresIn: '1h' });
}
const usersResolvers = {
    Query: {
        getUser(_, {}, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const { email } = checkAuth(context);
                return User.findOne({ email });
            });
        }
    },
    Mutation: {
        login(_, { username, password }) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(username, password);
                const { errors, valid } = validateLoginInput(username, password);
                if (!valid) {
                    throw new UserInputError('Errors', { errors });
                }
                const user = yield User.findOne({ email: username });
                // wrong username
                if (!user) {
                    errors.general = 'User not found';
                    throw new UserInputError('User not found', { errors });
                }
                // wrong password
                const match = yield bcrypt.compare(password, user.password);
                if (!match) {
                    errors.general = 'Wrong credentials';
                    throw new UserInputError('Wrong credentials', { errors });
                }
                // login is good, issue the user a token
                const token = generateToken(user);
                return Object.assign(Object.assign({}, user._doc), { id: user._id, token });
            });
        },
        register(_, { username, email, password, confirmPassword, avatar }) {
            return __awaiter(this, void 0, void 0, function* () {
                // Validate user data
                const { errors, valid } = validateRegisterInput(username, email, password, confirmPassword);
                if (!valid) {
                    throw new UserInputError('Errors', { errors });
                }
                // TODO: Make sure user doesn't already exist
                const user = yield User.findOne({ username });
                if (user) {
                    throw new UserInputError('Username is taken', {
                        errors: {
                            username: 'This username is taken... sorry yo.',
                        },
                    });
                }
                // Hash the password
                // eslint-disable-next-line no-param-reassign
                password = yield bcrypt.hash(password, 12);
                // create the new user with the model and passed in data
                const newUser = new User({
                    email,
                    avatar,
                    username,
                    password,
                    createdAt: new Date().toISOString(),
                });
                // save the user to the DB
                const res = yield newUser.save();
                // Create auth token
                const token = generateToken(res);
                return Object.assign(Object.assign({}, res._doc), { id: res._id, token });
            });
        },
    },
};
exports.usersResolvers = usersResolvers;
//# sourceMappingURL=users.js.map