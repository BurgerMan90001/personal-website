import mongoose from 'mongoose'

import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR: number = 10;

const uri: string = "mongodb+srv://paulcasigay:Nzi9o2DoFbXa2bIK@personal.tihsi3p.mongodb.net/?retryWrites=true&w=majority&appName=Personal";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };


//run().catch(console.dir);

export async function connectToDatabase() {
  try {
    console.log('connecting to database');
    await mongoose.connect(uri);

    const db =  mongoose.connection;

    

    //console.log(db.listCollections());
    console.log('Connected to MongoDB at', uri )
    //db.collections()

    const asd = await db.listDatabases();
    console.log(asd);


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
