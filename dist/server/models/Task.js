"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = exports.TaskSchema = void 0;
const mongoose_1 = require("mongoose");
// schema is the data definition
exports.TaskSchema = new mongoose_1.Schema({
    id: Number,
    title: String,
    description: String,
    completed: Boolean
});
exports.TaskModel = (0, mongoose_1.model)('Task', exports.TaskSchema);
