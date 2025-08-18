
import * as routers from './src/routes';
import * as util from './src/util';
import dotenv from 'dotenv';
import { app } from './app';
import express from 'express';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';

dotenv.config(); // load the env file

const showRequests: boolean = true;
const port: string = process.env.PORT || "3000"; // Take a port 3000 for running server.
const siteUrl: string = `http://localhost:${port}/`; 
//const publicPath: string = path.join(__dirname,'/public'); // Define the public path
const publicPath: string = path.join('public'); // Define the public path

app.use(util.logger); // enable logging
app.use(expressLayouts); // use layouts
app.use(express.json()); // Add this line to enable JSON parsing in the request body

loadPublicFolder(publicPath);

app.use('/tasks', routers.tasksRoutes); // Add this line to mount the Task API routes controller
app.use('/', routers.indexRoutes); // mount index api

setupViews();

startServer(port);

function loadPublicFolder(publicPath: string) {

    // staticly load the public folder
    //console.log(publicPath);
    app.use(express.static(util.files.tryGetSync(publicPath)));
}


function startServer(port: string) {
    // starts a simple http server locally on the specified port
    app.listen(port, () => {
        console.log("listening on : " + siteUrl); // show site
    }); 
}

function setupViews() {
    // set the view engine 
    app.set('view engine', 'ejs'); 
    // set the views directory (where templates will be stored)
    app.set('views', './views');
    // set default layout file to layout
    app.set('layout', 'layouts/layout');
}