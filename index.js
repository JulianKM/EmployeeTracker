const inquirer = require("inquirer");
const fs = require("fs");
const { async } = require("rxjs");



prompt_employee();

function prompt_employee () {

inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Department",
          "Add Department",
        ],
      },
    ])
    .then((data) => {
      if (data.action == "View All Department") {
        viewAllDepartment();
        prompt_employee();
      } else if (data.action == "View All Roles") {
        viewAllRoles();
        prompt_employee();
      } else if (data.action == "View All Employees") {
        viewAllEmployee();
        prompt_employee();
      } else if (data.action == "Add Employee") {
        addEmployee();
      } else if (data.action == "Add Department") {
        console.log(data);
      }
    });
}
