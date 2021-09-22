"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const { model, Schema } = require('mongoose');
const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
    role: String,
});
const User = model('User', userSchema);
exports.User = User;
//# sourceMappingURL=User.js.map