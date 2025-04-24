const readline = require('readline');
const chalk = require('chalk');

// Create a simple input/output interface for the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to beautify text (you can expand this as needed)
function beautifyText(input) {
    return chalk.green(input) // Example: applying color formatting using chalk
        .replace(/\n/g, '\n\n');  // Just a simple beautifier for example purposes
}

// Read input, beautify it, and display it
rl.on('line', (input) => {
    console.log(beautifyText(input));
});
