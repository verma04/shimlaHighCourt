"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const { model, Schema } = require('mongoose');
const MemberSchema = new Schema({
    username: String,
    password: String,
    email: String,
    phone: String,
    createdAt: String,
    EditedAt: String,
    avatar: String,
    gender: String,
    address: String,
    Chamber: String,
    fullname: String,
    slug: String,
    memberDescription: String,
    role: {
        type: String,
        default: "user"
    },
    status: {
        type: String,
        default: "enabled"
    },
    services: [
        {
            _id: {
                type: String,
            },
            createdAt: String,
        },
    ],
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
    paymentBilling: [
        {
            month: {
                type: String,
            },
            status: {
                type: String,
            },
            createdAt: String,
            list: [
                {
                    price: {
                        type: String,
                    },
                    serviceName: {
                        type: String,
                    },
                    serviceId: {
                        type: String,
                    },
                }
            ],
        },
    ],
});
const Member = model('Member', MemberSchema);
exports.Member = Member;
//# sourceMappingURL=Member.js.map