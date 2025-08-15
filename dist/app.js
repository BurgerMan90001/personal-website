"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Import the express in typescript file
const dotenv_1 = __importDefault(require("dotenv"));
const tasks_contoller_1 = require("./controllers/tasks.contoller"); // Import the task routes
const showRequests = true;
const app = (0, express_1.default)(); // Initialize the express engine
dotenv_1.default.config(); // load the env file
const port = process.env.PORT || "3000"; // Take a port 3000 for running server.
const site = `http://localhost:${port}/`;
app.use(express_1.default.json()); // Add this line to enable JSON parsing in the request body
app.use('/tasks', tasks_contoller_1.tasksController); // Add this line to mount the Task API routes controller
if (showRequests) {
    app.use('/', (request, response, next) => {
        console.log('Request Type:', request.method, request.url);
        next();
    });
}
app.get('/tasks', function (req, res) {
    console.log("/tasks request called");
    res.send('Welcome to GeeksforGeeks');
});
// staticly load the public folder
app.use(express_1.default.static(__dirname + '/public'));
// starts a simple http server locally on port 3000
app.listen(port, () => {
    console.log("listening on : " + site); // show site
}); // start the server on the port
