"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = __importDefault(require("../routes/tasks"));
function get(uri) {
    fetch(uri).then((response) => {
        // If the response is not 2xx, throw an error
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        // If the response is 200 OK, return the response in JSON format.
        onOk(response);
        return response;
    })
        .then((response) => onOk(response)) // You can continue to do something to the response.
        .catch((error) => onError(error)); // In case of an error, it will log an error
}
function onOk(response) {
    console.log(response);
}
function onError(error) {
    console.error("Fetch error:", error);
}
function create() {
    tasks_1.default.post('/');
}
