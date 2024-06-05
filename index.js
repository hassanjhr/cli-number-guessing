#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number - Done
// 2) User input for guessing number - Done
// 3) Compare user input with computer generated number and show result - Done
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log(`Congratulations! you guessed the right number which is ${randomNumber}.`);
}
else {
    console.log(` You have guessed the wrong number.`);
}
