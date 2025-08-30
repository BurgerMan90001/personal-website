// express is the backend server
import dotenv from 'dotenv'
import express from 'express'
import { logger } from './util/logger'
import cors from 'cors'
import { apiRoutes } from './routes/api'
import { port, siteUrl } from './config/serverConfig'
//import { MongoClient } from 'mongodb';
//import { BookSchema } from './models/Book.ts'
import { connectToCluster} from './dataBase';
import {promptInput} from './cli'
//import { error } from 'console'

dotenv.config() // load the env file

//const databaseUri: string = process.env.ATLAS_URI | ;

const server: express.Application = express()

server.use(cors()) // middleware to accept requests from different orgins/sources
server.use(logger) // log all requests
server.use(express.json()) // parses incoming requests as json
server.use(express.urlencoded({ extended: true })) // parses form data in requests


server.get('/ ',(req, res) => { // testing
  res.json({ data: 'index page' })
});

server.all('*',(req, res) => {
  res.redirect('https://www.geeksforgeeks.org')
})

//promptInput();


run();

async function run() {
  const cluster = await connectToCluster();

  server.use('/api', apiRoutes) // mount tasks api

  startServer(port);

}



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

/*
function mountMiddleware() {
  server.use(cors()) // middleware to accept requests from different orgins/sources
  useLogging(loggingEnabled)
  server.use(express.json()) // parses incoming requests as json
  server.use(express.urlencoded({ extended: true })) // parses form data in requests
  server.use('/api', apiRoutes) // mount tasks api
}
*/
