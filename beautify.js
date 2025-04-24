import chalk from 'chalk';
import boxen from 'boxen';

process.stdin.setEncoding('utf8');

let data = '';

process.stdin.on('data', chunk => {
    data += chunk;
});

process.stdin.on('end', () => {
    // Clean up \n and formatting
    const output = data
        .replace(/\\n/g, '\n')  // unescape \n
        .replace(/\\t/g, '\t')  // unescape \t
        .replace(/\\"/g, '"')   // unescape quotes
        .replace(/^"|"$/g, ''); // remove wrapping quotes if any

    // Try to parse and pretty-print JSON
    let prettyOutput = output;
    try {
        const parsed = JSON.parse(output);
        prettyOutput = JSON.stringify(parsed, null, 2);
    } catch { }

    console.log(
        boxen(chalk.green(prettyOutput), {
            padding: 1,
            borderStyle: 'round',
            borderColor: 'cyan',
        })
    );
});
