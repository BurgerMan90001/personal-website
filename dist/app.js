"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express")); // Import the express in typescript file
const tasksContoller_1 = require("./src/controllers/tasksContoller"); // Import the task routes
const indexController_1 = require("./src/controllers/indexController"); // Import the index routes
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)(); // Initialize the express engine
exports.app = app;
const publicPath = path_1.default.join(__dirname + '/public'); // Define the public path
app.use(express_1.default.json()); // Add this line to enable JSON parsing in the request body
app.use('/tasks', tasksContoller_1.tasksController); // Add this line to mount the Task API routes controller
app.use('/', indexController_1.indexController);
// staticly load the public folder
app.use(express_1.default.static(publicPath));
