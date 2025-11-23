#! /usr/bin/env node

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

const filePath = './names.json';

program
  .name('ibrahim-CLI')
  .description('A simple CLI tool built with Commander.js')
  .version('1.8.0');

program
  .command('add')
  .alias('a')
  .description('Greet a user by name')
  .action(() => {
    inquirer.prompt(questions).then((answers) => {
      console.log(
        `Hello, ${answers.username}! You are ${answers.age} years old. Your favorite color is ${answers.color}.`
      );

      if (fs.existsSync(filePath)) {
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            console.log("Error reading file", err);
            process.exit();
          }

          const fileJson = JSON.parse(data);
          fileJson.push(answers);

          fs.writeFile(filePath, JSON.stringify(fileJson), (err) => {
            if (err) {
              console.log("Error writing file");
              return;
            }

            // Show table after writing
            console.table(fileJson);
          });
        });
      } else {
        fs.writeFile(filePath, JSON.stringify([answers]), (err) => {
          if (err) {
            console.log("Error writing file");
            return;
          }

          // Show table for the first item
          console.table([answers]);
        });
      }
    });
  });

program.parse(process.argv);
