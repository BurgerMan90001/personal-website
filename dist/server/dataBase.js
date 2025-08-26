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
exports.connectToCluster = connectToCluster;
exports.disconnectFromCluster = disconnectFromCluster;
const mongoose_1 = __importDefault(require("mongoose"));
const SALT_WORK_FACTOR = 10;
const uri = "mongodb+srv://paulcasigay:Nzi9o2DoFbXa2bIK@personal.tihsi3p.mongodb.net/?retryWrites=true&w=majority&appName=Personal";
//const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
const clientOptions = {
    dbName: 'sample_mflix',
};
function connectToCluster() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('connecting to database');
            yield mongoose_1.default.connect(uri, clientOptions);
            const soundAppDatabase = mongoose_1.default.connection.collection('sound_app');
            console.log('Connected to MongoDB at', uri);
            //const dataBases = await cluster.listDatabases();
            //console.log(await cluster.listCollections());
            //return cluster;
        }
        catch (error) {
            console.error(error);
            disconnectFromCluster();
        }
    });
}
function disconnectFromCluster() {
    mongoose_1.default.disconnect();
    console.log('Disconnecting from database');
}
function onDatabaseOpen(db) {
    console.log(db.listCollections());
}
