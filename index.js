import inquirer from "inquirer";
const answers = await inquirer.prompt([
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
        choices: ["*", "+", "-", "/"],
        message: "Select Operator: "
    },
]);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    console.log("Your result is :", result);
}
else {
    console.log("Kindly enter valid input");
}
