import express from 'express'; // Import the express in typescript file
import dotenv from 'dotenv';
import { tasksController } from './src/controllers/tasksContoller'; // Import the task routes
import path from 'path'; 
const showRequests: boolean = true;

const app: express.Application = express(); // Initialize the express engine

dotenv.config(); // load the env file

const port: string = process.env.PORT || "3000"; // Take a port 3000 for running server.
const site: string = `http://localhost:${port}/`;
const publicPath: string = path.join( __dirname + '/public'); // Define the public path

app.use(express.json()); // Add this line to enable JSON parsing in the request body
app.use('/tasks', tasksController); // Add this line to mount the Task API routes controller


// staticly load the public folder
//console.log(publicPath);
app.use(express.static(publicPath));

// show requests in console
if (showRequests) {
    app.use('/', (request, response, next) => {
        console.log('Request Type:', request.method, request.url);
        next();
    })
};

// tasks 
app.get('/tasks', function (req, res) {
    console.log("/tasks request called");
    res.send('TASKS API is working');
});

// starts a simple http server locally on port 3000
app.listen(port, () => {
    console.log("listening on : " + site); // show site
}); // start the server on the port