import express, { Request, Response } from 'express'; // Import the express in typescript file
import path from "path";
import dotenv from 'dotenv';
import taskRoutes from './routes/tasks';

const app: express.Application = express(); // Initialize the express engine

dotenv.config(); // load the env file

const port: string = process.env.PORT || "3000"; // Take a port 3000 for running server.
const site: string = `http://localhost:${port}/`;

app.use(express.json()); // Add this line to enable JSON parsing in the request body
app.use('/tasks', taskRoutes); // Add this line to mount the Task API routes

app.use(express.static(__dirname + '/public'));
// starts a simple http server locally on port 3000
app.listen(port, () => {
    console.log("listening on : " + site); // show site
}); // start the server on the port