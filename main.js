#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// let todos= [];
// let condition = true;
// while(condition){
// let todolist = await inquirer.prompt([{
//     name:"todo",
//     type:"input",
//     message:"What you want to add in yout Todos?",
// },
// {
//     name:"addMore",
//     type:"confirm",
//     message:"Do you want to add more?",
//     default:"false"
// }])
// todos.push(todolist.todo);
// condition= todolist.addMore;
// console.log(todos)
// }
let todos = [];
async function start() {
    while (true) {
        let todolist = await inquirer.prompt([
            {
                name: "todo",
                type: "list",
                message: "Please Select the Function you want to perform?",
                choices: ["add task", "delete task", "View List", "Exit"]
            },
        ]);
        if (todolist.todo === "add task") {
            let taskList = await inquirer.prompt({
                name: "addTask",
                type: "input",
                message: "What do you want to add in your Todos?",
            });
            todos.push(taskList.addTask);
            console.log(chalk.yellowBright(`\n"Congratulation" you successfully added your To do's`));
            console.log(chalk.magentaBright.bold(`\n========= Updated To Do List =========`));
            console.log(chalk.green(`\n${todos.map(todo => todo.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")).join('\n')}`));
            console.log(chalk.magentaBright(`\n=============== The End ==============`));
        }
        else if (todolist.todo === "delete task") {
            let dltList = await inquirer.prompt([
                {
                    name: "dltTask",
                    type: "list",
                    message: "What do you want to Delete from your Todos?",
                    choices: todos
                }
            ]);
            let indexToDelete = todos.indexOf(dltList.dltTask);
            todos.splice(indexToDelete, 1);
            console.log(chalk.yellowBright(`"Congratulation" you successfully Deleted selected To do's`));
            console.log(chalk.magentaBright.bold(`\n========= Updated To Do List =========`));
            console.log(chalk.green(`\n${todos.map(todo => todo.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")).join('\n')}`));
            console.log(chalk.magentaBright(`\n=============== The End ==============`));
        }
        else if (todolist.todo === "View List")
            setTimeout(() => {
                console.log(chalk.magentaBright.bold(`\n========== My To Do List ==========`));
                console.log(chalk.green(`\n${todos.map(todo => todo.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")).join('\n')}`));
                console.log(chalk.magentaBright(`\n=============== The End ==============`));
            }, 50);
        else if (todolist.todo === "Exit") {
            setTimeout(() => {
                console.log(chalk.magentaBright.bold(`\n==========Thank you For Using Our App==========`));
                process.exit();
            }, 1000);
        }
    }
}
start();
