import readline from 'readline';
import mongoose from 'mongoose';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Command: ',
});



rl.on('line', (line: string) => {
  respond(line);
  rl.prompt();

}).on('close', () => {
  sayGoodbye();
});
/**
 * Response
 * @param line
 */
function respond(line:string) {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
}
function sayGoodbye() {
  console.log('Have a great day!');
  process.exit(0);
}
export function promptInput() {
  rl.prompt();
}


