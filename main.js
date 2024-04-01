#! /usr/bin/env node
import inquirer from "inquirer";
import Chalk from "Chalk";
// inquirer -D
//array -D
// function -D
// operators -D
let todos = ["nouman", "hammad"];
console.log(Chalk.blue("*******"));
console.log(Chalk.green("Welcome to Todo App"));
console.log(Chalk.blue("*******"));
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "Select",
            message: "Select and Operation",
            choices: [
                "Add",
                "Update",
                "View",
                "Delete",
                "Exit",
            ]
        });
        if (ans.Select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add items in the list",
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
            //console.log(todos);
        }
        if (ans.Select == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "Update items in the list",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add items in the list",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (ans.Select == "View") {
            console.log(Chalk.blue("***To Do List***"));
            console.log(Chalk.green(todos));
            console.log(Chalk.blue("*************"));
            todos.forEach(todo => console.log(todo));
        }
        if (ans.Select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "Delete items in the list",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
        if (ans.Select == "Exit") {
            console.log("Existing....");
            console.log("Good Bye");
        }
    } while (true);
}
createTodo(todos);
