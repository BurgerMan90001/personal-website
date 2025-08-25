import mongoose from 'mongoose'

import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR: number = 10;

const uri: string = "mongodb+srv://paulcasigay:Nzi9o2DoFbXa2bIK@personal.tihsi3p.mongodb.net/?retryWrites=true&w=majority&appName=Personal";

//const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const clientOptions = {
  dbName: 'sample_mflix',
}


export async function connectToCluster() {
  try {
    console.log('connecting to database');
    await mongoose.connect(uri, clientOptions);

    const db =  mongoose.connection;

    console.log('Connected to MongoDB at', uri )

    const dataBases = await db.listDatabases();
    
    //console.log(await db.listCollections());


  } catch(error) {
    console.error(error);
    disconnectDatabase();
  }
}

function disconnectDatabase() {
  mongoose.disconnect();
  console.log('Disconnecting from database');
}
function onDatabaseOpen(db: mongoose.Connection) {
  console.log(db.listCollections());
}
