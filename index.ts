#!/usr/bin/env node

import inquirer from "inquirer";

const answers : {
    numberOne: number,
    numberTwo: number,
    operator: string 
} = await inquirer.prompt([
    {
        types: "number",
        name: "numberOne",
        message: "Kindly Enter Your First No: "
    },
    {
        types: "number",
        name: "numberTwo",
        message: "kindly Enter Your First No: "
    },
    {
        types: "number",
        name: "operator",
        choices: ["Addition(+)", "Subtraction(-)", "Multiplication(*)", "Division(/)"],
        message: "Select Operator: "
    },
]);

const {numberOne, numberTwo, operator} = answers;
if(numberOne && numberTwo && operator) {
    let result: number = 0; 
    if(operator === "+"){
        result = numberOne + numberTwo
    } else  if(operator === "-"){
        result = numberOne - numberTwo
    }   if(operator === "/"){
        result = numberOne / numberTwo 
    }   if(operator === "*"){
        result = numberOne * numberTwo 
    }

    console.log("Your result is :", result)
} else{
    console.log("Kindly enter valid input")
}
