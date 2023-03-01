const { prompt, default: inquirer } = require('inquirer')
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
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE",
                },
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE",
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ALL_ROLES",
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE",
                },
                {
                    name: "View All Department",
                    value: "VIEW_ALL_DEPARTMENT",
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT",
                }
            ],
        },
    ])
        .then((data) => {
            let action = data.action

            switch (action) {
                case "VIEW_ALL_EMPLOYEES":
                    viewAllEmployees();
                    break;
                case "ADD_EMPLOYEE":
                    addEmployee();
                    break;
                case "UPDATE_EMPLOYEE_ROLE":
                    updateEmployeeRole();
                    break;
                case "VIEW_ALL_ROLES":
                    viewAllRoles();
                    break;
                case "ADD_ROLE":
                    addRole();
                    break;
                case "VIEW_ALL_DEPARTMENT":
                    viewAllDepartment();
                    break;
                case "ADD_DEPARTMENT":
                    addDepartment();
                    break;
                // one of the above sequences for every query/action
                default:
                    end();
            }
        });
}

function viewAllEmployees() {
    db.getAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log('employees')
            console.table(employees)
        })
        .then(() => prompt_employee())
}

function viewAllDepartment() {
    db.getAllDepartments()
        .then(([rows]) => {
            let department = rows;
            console.log("departments")
            console.table(department)
        })
        .then(() => prompt_employee())
}

function viewAllRoles() {
    db.getAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("roles")
            console.table(roles)
        })
        .then(() => prompt_employee())
}

function addDepartment() {
    prompt([
        {
            type: "input",
            message: "enter department name",
            name: "name"
        }
    ])
        .then(response => {
            db.addDepartment(response)
                .then(() => prompt_employee())
        })
}

function addRole() {
    prompt([
        {
            type: "input",
            message: "enter role name",
            name: "title"
        },
        {
            type: "input",
            message: "enter role salary",
            name: "salary"
        },
        {
            type: "input",
            message: "enter department id",
            name: "department_id"
        },
    ])
        .then(response => {
            db.addRole(response)
                .then(() => prompt_employee())
        })
}

function addEmployee() {
    prompt([
        {
            type: "input",
            message: "enter first name ",
            name: "first_name"
        },
        {
            type: "input",
            message: "enter last name",
            name: "last_name"
        },
        {
            type: "input",
            message: "enter role id",
            name: "role_id"
        },
        {
            type: "input",
            message: "enter manager id",
            name: "manager_id"
        }
    ])
        .then(response => {
            // response.manager_id = null;
            db.addEmployee(response)
                .then(() => prompt_employee())
        })
}

function updateEmployeeRole() {
    prompt([
        {
            type: "input",
            message: "enter employee id",
            name: "employee_id"
        },
        {
            type: "input",
            message: "enter role id",
            name: "role_id"
        }
    ])
    .then(response => {
        db.addEmployee(response.employee_id, response.role_id)
            .then(() => prompt_employee())
    })
}


function end() {
    console.log('bye')
    process.exit()
}