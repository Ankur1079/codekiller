CREATE DATABASE your_database_name;

USE your_database_name;

CREATE TABLE users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    password VARCHAR(50),
    reg_date TIMESTAMP
);
