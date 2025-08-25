// express is the backend server
import dotenv from 'dotenv'
import express from 'express'
import { logger } from './util/logger.ts'
import cors from 'cors'
import { apiRoutes } from './routes/apiRoutes.ts'
import { loggingEnabled, port, siteUrl } from './config/apiServerConfig.ts'
//import { MongoClient } from 'mongodb';
import { bookSchema } from './models/bookSchema.ts'
import { connectToDatabase} from './dataBase.ts';
import {promptInput} from './util/databaseCli.ts'
//import { error } from 'console'

dotenv.config() // load the env file

//const databaseUri: string = process.env.ATLAS_URI | ;

const server: express.Application = express()

mountMiddleware()

server.get('/', (req, res) => {
  res.json({ data: 'index page' })
})
//promptInput();

//startServer(port);
//connectToDatabase();
connectToDatabase().catch(console.dir);

/**
 * starts a simple http server locally on the specified port and logs the site url
 * @param {string} port - port number in string form
 */
function startServer(port: string) {
  const today = new Date()
  console.log('today is : ' + today)
  server.listen(port, () => {
    console.log('listening on : ' + siteUrl) // show site
  })

}


/**
 * logs all requests
 * @param loggingEnabled -
 */
function useLogging(loggingEnabled: boolean) {
  if (loggingEnabled) {
    server.use(logger) // log all requests
  }
}

function mountMiddleware() {
  server.use(cors()) // middleware to accept requests from different orgins/sources
  useLogging(loggingEnabled)
  server.use(express.json()) // parses incoming requests as json
  server.use(express.urlencoded({ extended: true })) // parses form data in requests
  server.use('/api', apiRoutes) // mount tasks api
}
