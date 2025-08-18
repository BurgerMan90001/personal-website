
import { NextFunction, Request, Response } from "express";


let totalRequests: number = 0;

function logger(req:Request, res:Response, next: NextFunction) {
    totalRequests++;
    console.log(req.method,"REQUEST at: ", req.url, req.ip, totalRequests);
    

    next(); // Passing the request to the next handler in the stack.
}



export { logger };