"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = logger;
let totalRequests = 0;
function logger(req, res, next) {
    totalRequests++;
    console.log(req.method, "REQUEST at: ", req.url, req.ip, totalRequests);
    next(); // Passing the request to the next handler in the stack.
}
