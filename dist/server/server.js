"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// express is the backend server
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const logger_1 = require("./util/logger");
const cors_1 = __importDefault(require("cors"));
const apiRoutes_1 = require("./routes/apiRoutes");
const serverConfig_1 = require("./config/serverConfig");
//import { MongoClient } from 'mongodb';
//import { BookSchema } from './models/Book.ts'
const dataBase_1 = require("./dataBase");
//import { error } from 'console'
dotenv_1.default.config(); // load the env file
//const databaseUri: string = process.env.ATLAS_URI | ;
const server = (0, express_1.default)();
server.use((0, cors_1.default)()); // middleware to accept requests from different orgins/sources
server.use(logger_1.logger); // log all requests
server.use(express_1.default.json()); // parses incoming requests as json
server.use(express_1.default.urlencoded({ extended: true })); // parses form data in requests
server.get('/', (req, res) => {
    res.json({ data: 'index page' });
});
//promptInput();
run();
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const cluster = yield (0, dataBase_1.connectToCluster)();
        server.use('/api', apiRoutes_1.apiRoutes); // mount tasks api
        startServer(serverConfig_1.port);
    });
}
/**
 * starts a simple http server locally on the specified port and logs the site url
 * @param {string} port - port number in string form
 */
function startServer(port) {
    const today = new Date();
    console.log('today is : ' + today);
    server.listen(port, () => {
        console.log('listening on : ' + serverConfig_1.siteUrl); // show site
    });
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
