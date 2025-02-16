import chalk from 'chalk';
import promptSync from 'prompt-sync';
const prompt = promptSync();
const redColor = chalk.red;
const greenColor = chalk.green;
const blueColor = chalk.blue;

console.log(`s${redColor('R')}${greenColor('G')}${blueColor('B')}Normalizer`);

console.log(`Please insert your color
for exmaple: "255, 255, 255"`)
let rgbColor = prompt('sRGB color: ');