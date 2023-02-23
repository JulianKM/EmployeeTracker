const { prompt } = require('inquirer')
const db = require('./db');

prompt_employee();

function prompt_employee() {

prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: [
            {
                name: "View All Employees",
                value: "VIEW_ALL_EMPLOYEES",
            },
            {
                name:  "Add Employee",
                value: "ADD_EMPLOYEE"
            }
        //   "Update Employee Role",
        //   "View All Roles",
        //   "Add Role",
        //   "View All Department",
        //   "Add Department",
        ],
      },
    ])
    .then((data) => {
        let action = data.action

        switch (action) {
            case "VIEW_ALL_EMPLOYEES":
                viewEmployees();
                break;
            case "ADD_EMPLOYEE":
                addEmployee()
                break;
            // one of the above sequences for every query/action
            default:
                end();
        }
    //   if (data.action == "View All Department") {
    //     viewAllDepartment();
    //     prompt_employee();
    //   } else if (data.action == "View All Roles") {
    //     viewAllRoles();
    //     prompt_employee();
    //   } else if (data.action == "View All Employees") {
    //     viewAllEmployee();
    //     prompt_employee();
    //   } else if (data.action == "Add Employee") {
    //     addEmployee();
    //   } else if (data.action == "Add Department") {
    //     console.log(data);
    //   }
    });
}

function viewEmployees() {
    db.getAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log('employees')
            console.table(employees)
        })
        .then(() => prompt_employee())
}
function end() {
    console.log('bye')
    process.exit()
}