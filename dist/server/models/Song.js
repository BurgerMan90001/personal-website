"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongModel = exports.SongSchema = void 0;
const mongoose_1 = require("mongoose");
exports.SongSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
    },
    /*
    cover: {

    }
    */
});
exports.SongModel = (0, mongoose_1.model)('Song', exports.SongSchema);
