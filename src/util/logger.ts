
import { NextFunction, Request,Response } from "express";
interface loggerOptions {
    
}
let logger = function(req:Request, res:Response, next: NextFunction) {
    console.log(req.method,"REQUEST at: ", req.path, req.url);
    next(); // Passing the request to the next handler in the stack.
}
export { logger };