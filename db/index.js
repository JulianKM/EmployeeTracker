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
}

module.exports = new DB(connection);