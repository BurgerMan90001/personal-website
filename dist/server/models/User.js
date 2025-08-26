"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
});
exports.UserModel = (0, mongoose_1.model)('User', exports.UserSchema);
