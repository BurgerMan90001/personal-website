"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollModel = exports.PollSchema = void 0;
const mongoose_1 = require("mongoose");
// test schema
exports.PollSchema = new mongoose_1.Schema({
    question: {
        type: String,
        required: true,
    },
    answers: [{
            type: String,
            required: true,
        }]
});
exports.PollModel = (0, mongoose_1.model)('Poll', exports.PollSchema);
