import readline from 'readline';
import mongoose from 'mongoose';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Command: ',
});

rl.on('line', (line: string) => {
  //respond(line);
  rl.prompt();

}).on('close', () => {
  sayGoodbye();
});


/**
 * Response
 * @param line
 */

function executeCommand(line:string) {


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
export function promptInput() {
  rl.prompt();
}
