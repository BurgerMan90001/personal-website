"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.siteUrl = exports.port = void 0;
exports.port = process.env.SERVER_PORT || "3000"; // Take a port 3000 for running server.
exports.siteUrl = `http://localhost:${exports.port}/`; // for dev
