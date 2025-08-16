
import express from 'express'; 
import { tasksController } from './src/controllers/tasksContoller'; // Import the task routes
import { indexController } from './src/controllers/indexController'; // Import the index routes
import { loadPublic } from './src/services/fileLoader';
import { logger } from './src/util/logger';

const app: express.Application = express(); // Initialize the express engine

app.use(logger);

app.use(express.json()); // Add this line to enable JSON parsing in the request body

// staticly load the public folder
loadPublic(app);


app.use('/tasks', tasksController); // Add this line to mount the Task API routes controller
app.use('/', indexController); // mount index api


export { app }; 