const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    getAllEmployees() {
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name FROM employee"
        )
    }
    getAllDepartments() {
        return this.connection.promise().query(
            "SELECT * FROM department"
        )
    }
    getAllRoles() {
        return this.connection.promise().query(
            "SELECT * FROM department_role"
        )
    }
    addDepartment(department) {
        return this.connection.promise().query(
            "INSERT INTO department SET ?", department
        )
    }
    addRole(role) {
        return this.connection.promise().query(
            "INSERT INTO department_role SET ?", role
        )
    }
    addEmployee(employee) {
        return this.connection.promise().query(
            "INSERT INTO employee SET ?", employee
        )
    }
    updateEmployeeRole(employeeID, roleID) {
        return this.connection.promise().query(
            "UPDATE employee SET role_id = ? WHERE id = ?", [roleID, employeeID]
        )
    }
}

module.exports = new DB(connection);