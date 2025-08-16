import dotenv from 'dotenv';
import { app } from './app';

dotenv.config(); // load the env file

const showRequests: boolean = true;
const port: string = process.env.PORT || "3000"; // Take a port 3000 for running server.
const siteUrl: string = `http://localhost:${port}/`;

// show requests in console
if (showRequests) {
    app.use('/', (request, response, next) => {
        console.log('Request Type:', request.method, request.url);
        next();
    });
};

// starts a simple http server locally on port 3000
app.listen(port, () => {
    console.log("listening on : " + siteUrl); // show site
}); 