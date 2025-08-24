
import type { NextFunction, Request, Response } from "express";

let totalRequests: number = 0;


function logger(req:Request, res:Response, next: NextFunction) {
    totalRequests++;
    //res.send('asdasdadasdadads')
    console.log(req.method,"REQUEST at: ", req.url, req.ip, totalRequests);
    //res.json({data:'test'})
    console.log('asdasda')
    next(); // Passing the request to the next handler in the stack.
}

export { logger };
