import express from 'express'; // Import the express in typescript file
import { tasksController } from './src/controllers/tasksContoller'; // Import the task routes
import path from 'path'; 

const app: express.Application = express(); // Initialize the express engine

const publicPath: string = path.join( __dirname + '/public'); // Define the public path

app.use(express.json()); // Add this line to enable JSON parsing in the request body
app.use('/tasks', tasksController); // Add this line to mount the Task API routes controller


// staticly load the public folder
//console.log(publicPath);
app.use(express.static(publicPath));


// tasks testing
app.get('/tasks', function (req, res) {
    console.log("/tasks request called");
    res.send('TASKS API is working');
});

export { app }; 