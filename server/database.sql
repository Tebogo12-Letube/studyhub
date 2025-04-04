CREATE DATABASE study_hub;
USE study_hub;

CREATE TABLE users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE progress (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT,
    module VARCHAR(255),
    completed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
