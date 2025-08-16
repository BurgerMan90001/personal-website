"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const tasksContoller_1 = require("./src/controllers/tasksContoller"); // Import the task routes
const indexController_1 = require("./src/controllers/indexController"); // Import the index routes
const fileLoader_1 = require("./src/services/fileLoader");
const logger_1 = require("./src/util/logger");
const app = (0, express_1.default)(); // Initialize the express engine
exports.app = app;
app.use(logger_1.logger);
app.use(express_1.default.json()); // Add this line to enable JSON parsing in the request body
// staticly load the public folder
(0, fileLoader_1.loadPublic)(app);
app.use('/tasks', tasksContoller_1.tasksController); // Add this line to mount the Task API routes controller
app.use('/', indexController_1.indexController); // mount index api
