import { tasksController } from './src/controllers/tasksContoller'; // Import the task routes
import { indexController } from './src/controllers/indexController'; // Import the index routes
import { loadPublic } from './src/services/fileLoader';
import { logger } from './src/util/logger';
import dotenv from 'dotenv';
import { app } from './app';
import express from 'express';


dotenv.config(); // load the env file

const showRequests: boolean = true;
const port: string = process.env.PORT || "3000"; // Take a port 3000 for running server.
const siteUrl: string = `http://localhost:${port}/`;

app.use(logger);

app.use(express.json()); // Add this line to enable JSON parsing in the request body

// staticly load the public folder
loadPublic(app)


app.use('/tasks', tasksController); // Add this line to mount the Task API routes controller
app.use('/', indexController); // mount index api




// show requests in console
if (showRequests) {
    app.use('/', (request, response, next) => {
        console.log('Request Type:', request.method, request.url);
        next();
    });
};

// starts a simple http server locally on port 3000
app.listen(port, () => {
    console.log("listening on : " + siteUrl); // show site
}); 