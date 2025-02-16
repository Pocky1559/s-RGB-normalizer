import chalk from 'chalk';
import promptSync from 'prompt-sync';
import clipboard from 'clipboardy';

const prompt = promptSync();
const redColor = chalk.red;
const greenColor = chalk.green;
const blueColor = chalk.blue;
let confirm_loop;

function calculateRGB(number) {
  return (number / 255).toFixed(3);
}

function continueUsingProgram() {
  while (true) {
    confirm_loop = prompt('Do you want to continue using this program? (Y/N): ')

    if (confirm_loop.toUpperCase() === 'Y') {
      break;
    } else if (confirm_loop.toUpperCase() === 'N') {
      process.exit(0);
    } else {
      console.log('please type Y or N')
    }
  }
}

while (true) {
  console.clear();
  console.log(`s${redColor('R')}${greenColor('G')}${blueColor('B')}Normalizer\nversion 1.1`);

  console.log(`\nPlease insert your color\nfor exmaple: "${redColor(255)},${greenColor(255)},${blueColor(255)}"`)
  let rgbColor = prompt('sRGB color: ');

  const [r255, g255, b255] = rgbColor.split(',').map(Number);

  const r1 = calculateRGB(r255);
  const g1 = calculateRGB(g255);
  const b1 = calculateRGB(b255);

  console.log(`\nHere is your new sRGB number ${redColor(r1)},${greenColor(g1)},${blueColor(b1)}`);

  clipboard.writeSync(`${r1},${g1},${b1}`);
  console.log(`\nnew sRGB number had copy to your clipboard\n`);

  continueUsingProgram()
}