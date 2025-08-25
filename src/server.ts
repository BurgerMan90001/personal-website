// express is the backend server
import dotenv from 'dotenv';
import express from 'express';
import { logger } from './util/logger.ts';
import cors from 'cors';
import { apiRoutes } from './api/routes/apiRoutes.ts';
import { loggingEnabled, port, siteUrl } from './config/apiServerConfig.ts'
//import { MongoClient } from 'mongodb';
import {bookSchema} from './models/bookSchema.ts'
import mongoose from 'mongoose';
import { error } from 'console';

dotenv.config(); // load the env file

const databaseUri: string = process.env.ATLAS_URI;

const server: express.Application = express();

mountMiddleware();


server.get('/', (req, res) => {
  res.json(
    { data:'index page' }
  );
});

startServer(port);

/**
 * starts a simple http server locally on the specified port and logs the site url
 * @param {string} port - port number in string form
 */
function startServer(port: string) {
  const today = new Date();
  console.log('today is : '+today);
  server.listen(port, () => {
      console.log("listening on : " + siteUrl); // show site
  });

  connectToDatabase();
}

function connectToDatabase() {
  try {
    mongoose.connect('mongodb://127.0.0.1:27017/Personal',{
      

    });
    // paulcasigay
    // Nzi9o2DoFbXa2bIK
    const db = mongoose.connection;
    db.on('error', (err) => {
      console.error(err);
    });

    db.once('open', () => {
      console.log('Connected to MongoDB');
    });
  } catch(error) {
     console.log(error);
  };

}

/**
 * logs all requests
 * @param loggingEnabled -
 */
function useLogging(loggingEnabled: boolean) {
  if (loggingEnabled) {
      server.use(logger); // log all requests
  }
}

function mountMiddleware() {
  server.use(cors()); // middleware to accept requests from different orgins/sources
  useLogging(loggingEnabled);
  server.use(express.json()); // parses incoming requests as json
  server.use(express.urlencoded({ extended: true })); // parses form data in requests
  server.use('/api', apiRoutes); // mount tasks api
}
