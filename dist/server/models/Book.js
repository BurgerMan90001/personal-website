"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = exports.BookSchema = void 0;
const mongoose_1 = require("mongoose");
// test schema
exports.BookSchema = new mongoose_1.Schema({
    title: String,
    author: String,
    year: Number
});
exports.BookModel = (0, mongoose_1.model)('Book', exports.BookSchema);
