import chalk from 'chalk';
import promptSync from 'prompt-sync';
const prompt = promptSync();
const redColor = chalk.red;
const greenColor = chalk.green;
const blueColor = chalk.blue;

function calculateRGB(number) {
  return Math.round((number / 255) / 100);
}

console.log(`s${redColor('R')}${greenColor('G')}${blueColor('B')}Normalizer`);

console.log(`Please insert your color
for exmaple: "255, 255, 255"`)
let rgbColor = prompt('sRGB color: ');

const [r, g, b] = rgbColor.split(',').map(Number);

r = calculateRGB(r);
g = calculateRGB(g);
b = calculateRGB(b);

console.log(`Here is your new sRGB number`)