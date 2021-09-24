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
    Chamber: String,
    notifcations: [
        {
            type: {
                type: String,
            },
            message: {
                type: String,
            },
            createdAt: String,
        },
    ],
    chamberDet: [
        {
            month: {
                type: String,
            },
            price: {
                type: String,
            },
            payment: {
                type: String,
            },
            status: {
                type: String,
            },
            chamberId: {
                type: String,
            },
            createdAt: String,
        },
    ],
    parkingDet: [
        {
            month: {
                type: String,
            },
            price: {
                type: String,
            },
            payment: {
                type: String,
            },
            status: {
                type: String,
            },
            parkingId: {
                type: String,
            },
            createdAt: String,
        },
    ],
});
const Member = model('Member', MemberSchema);
exports.Member = Member;
//# sourceMappingURL=Member.js.map