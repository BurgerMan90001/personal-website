import express from 'express'; // Import the express in typescript file
import { tasksController } from './src/controllers/tasksContoller'; // Import the task routes
import { indexController } from './src/controllers/indexController'; // Import the index routes
import path from 'path'; 

const app: express.Application = express(); // Initialize the express engine

const publicPath: string = path.join( __dirname + '/public'); // Define the public path

app.use(express.json()); // Add this line to enable JSON parsing in the request body
app.use('/tasks', tasksController); // Add this line to mount the Task API routes controller
app.use('/', indexController);

// 404 not found page
app.all('*', (req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});

// staticly load the public folder
app.use(express.static(publicPath));


export { app }; 