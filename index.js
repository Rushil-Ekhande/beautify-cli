const chalk = require('chalk');
const boxen = require('boxen');

process.stdin.setEncoding('utf8');

let data = '';

process.stdin.on('data', chunk => {
    data += chunk;
});

process.stdin.on('end', () => {
    const output = data
        .replace(/\\n/g, '\n')
        .replace(/\\t/g, '\t')
        .replace(/\\"/g, '"')
        .replace(/^"|"$/g, '');

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
