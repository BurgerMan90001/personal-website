"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptInput = promptInput;
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Command: ',
});
rl.on('line', (line) => {
    //respond(line);
    rl.prompt();
}).on('close', () => {
    sayGoodbye();
});
/**
 * Response
 * @param line
 */
function executeCommand(line) {
    switch (line.trim()) {
        case '':
            //console.log('world!');
            break;
        case '':
            break;
        default:
            console.log(`Say what? What does '${line.trim()}' mean?`);
            break;
    }
}
function sayGoodbye() {
    console.log('Have a great day!');
    process.exit(0);
}
function promptInput() {
    rl.prompt();
}
