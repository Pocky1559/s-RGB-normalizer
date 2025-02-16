import chalk from 'chalk';
import promptSync from 'prompt-sync';
const prompt = promptSync();
const redColor = chalk.red;
const greenColor = chalk.green;
const blueColor = chalk.blue;

function calculateRGB(number) {
  return (number / 255).toFixed(3);
}

console.log(`s${redColor('R')}${greenColor('G')}${blueColor('B')}Normalizer`);

console.log(`Please insert your color
for exmaple: "255, 255, 255"`)
let rgbColor = prompt('sRGB color: ');

const [r255, g255, b255] = rgbColor.split(',').map(Number);

const r1 = calculateRGB(r255);
const g1 = calculateRGB(g255);
const b1 = calculateRGB(b255);

console.log(`Here is your new sRGB number ${redColor(r1)},${greenColor(g1)},${blueColor(b1)}`);