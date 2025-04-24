// index.js

process.stdin.setEncoding('utf8');

let data = '';

// Listen for data input
process.stdin.on('data', chunk => {
    data += chunk;
});

// Listen for end of input
process.stdin.on('end', async () => {
    // Dynamically import the packages (for ESM compatibility)
    const chalk = (await import('chalk')).default;
    const boxen = (await import('boxen')).default;

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

    // Output the formatted result in a box
    console.log(
        boxen(chalk.green(prettyOutput), {
            padding: 1,
            borderStyle: 'round',
            borderColor: 'cyan',
        })
    );
});
