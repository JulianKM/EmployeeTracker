const mysql = require("mysql2")

const connection = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "Momo25141638",
      database: "employee_db",
    },
    console.log(`Connected to the classlist_db database.`)
  );

connection.connect((err) => {
    if (err) throw err;
})

module.exports = connection;