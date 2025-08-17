import { tasksController } from './src/controllers/tasksContoller'; // Import the task routes
import { indexController } from './src/controllers/indexController'; // Import the index routes
import { logger } from './src/util/logger';
import dotenv from 'dotenv';
import { app } from './app';
import express from 'express';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';

dotenv.config(); // load the env file

const showRequests: boolean = true;
const port: string = process.env.PORT || "3000"; // Take a port 3000 for running server.
const siteUrl: string = `http://localhost:${port}/`; 
const publicPath: string = path.join(__dirname,'/public'); // Define the public path

app.use(logger); // enable logging
app.use(expressLayouts); // use layouts
app.use(express.json()); // Add this line to enable JSON parsing in the request body

// staticly load the public folder
app.use(express.static(publicPath));

// set the view engine 
app.set('view engine', 'ejs'); 

// Set the views directory (where templates will be stored)
app.set('views', './views');
// set default layout
app.set('layout', 'layouts/layout');

app.use('/tasks', tasksController); // Add this line to mount the Task API routes controller
app.use('/', indexController); // mount index api



// starts a simple http server locally on port 3000
app.listen(port, () => {
    console.log("listening on : " + siteUrl); // show site
}); 