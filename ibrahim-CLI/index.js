import { Command } from 'commander';
import inquirer from 'inquirer';
import fs from 'fs';

const program = new Command();

const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your name?',
  },
  {
    type: 'number',
    name: 'age',
    message: 'How old are you?',
  },
  {
    type: 'list',
    name: 'color',
    message: 'What is your favorite color?',
    choices: ['Red', 'Blue', 'Green', 'Yellow'],
  },
];

program
  .name('ibrahim-CLI')
  .description('A simple CLI tool built with Commander.js')
  .version('1.8.0');

program
  .command('add')
  .alias('a')
  .description('Greet a user by name')
  .action(() => {
    inquirer
      .prompt(questions)
      .then((answers) => {
        console.log(
          `Hello, ${answers.username}! You are ${answers.age} years old. Your favorite color is ${answers.color}.`
        );

        fs.writeFile('./names.json', JSON.stringify(answers), (err) => {
          if (err) {
            console.log("Error writing file");
          } else {
            console.log("File written successfully");
          }
        });
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.log("Prompt couldn't be rendered in the current environment");
        } else {
          console.log("Something else went wrong");
        }
      });
  });

program.parse(process.argv);
