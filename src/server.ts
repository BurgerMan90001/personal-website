// express is the backend server
import dotenv from 'dotenv';
import express from 'express';
import { logger } from './util/logger.js';
import cors from 'cors';
import taskRoutes from './api/routes/apiRoutes.js';
dotenv.config(); // load the env file

const app: express.Application = express();

const loggingEnabled: boolean = true;
const port: string = process.env.PORT || "3000"; // Take a port 3000 for running server.
const siteUrl: string = `http://localhost:${port}/`;

app.use(cors()); // middleware to accept requests from different orgins/sources
useLogging(loggingEnabled);
express.json(); // parses incoming requests as json
express.urlencoded({ extended: true }); // parses form data in requests
app.use('/tasks', taskRoutes); // mount tasks api

/*
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
*/

startServer(port);


/**
 * starts a simple http server locally on the specified port and logs the site url
 * @param {string} port - port number in string form
 */
function startServer(port: string) {

    app.listen(port, () => {
        console.log("listening on : " + siteUrl); // show site
    });
}

/**
 * logs get requests
 * @param loggingEnabled -
 */
function useLogging(loggingEnabled: boolean) {
  if (loggingEnabled) {
      app.use(logger); // log all requests
  }
}
