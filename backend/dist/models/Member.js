"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const { model, Schema } = require('mongoose');
const MemberSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
    avatar: String,
    gender: String,
});
const Member = model('Member', MemberSchema);
exports.Member = Member;
//# sourceMappingURL=Member.js.map