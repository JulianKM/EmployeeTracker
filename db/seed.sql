1USE employee_db;

INSERT INTO department (name) 
VALUES 
("Sales"),
("Engineering"),
("Legal"),
("Finance");

INSERT INTO department_role (title, salary, department_id) 
VALUES 
("Sales Lead", 500,1),
("Salesperson", 100,1),
("Lead Engineer", 300,2),
("Software Engineer", 200, 2),

INSERT INTO employee (first_name, last_name,role_id, manager_id) 
VALUES 
("Julian","Mason",1,NULL),
("Noah","Ramirez",2,1),
("Sean","Barry",3,NULL ),
("Camryn","Sorrels",4,3),