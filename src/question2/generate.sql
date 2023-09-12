CREATE database hku_pootal;

ALTER DATABASE hku_pootal CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

use hku_pootal;

-- 创建Employee员工表
CREATE TABLE Employee
(
    emp_id     INTEGER PRIMARY KEY,
    emp_name   VARCHAR(20),
    emp_salary INTEGER,
    dept_id    INTEGER
);

-- 创建Department部门表
CREATE TABLE Department
(
    dept_id   INTEGER PRIMARY KEY,
    dept_name VARCHAR(20)
);


-- Insert department data
INSERT INTO Department (dept_id, dept_name)
VALUES (1, 'Human Resources'),
       (2, 'Marketing'),
       (3, 'Finance'),
       (4, 'Technology');

-- Insert employee data
INSERT INTO Employee (emp_id, emp_name, emp_salary, dept_id)
VALUES (1, 'John Smith', 50000, 1),
       (2, 'Jane Doe', 55000, 1),
       (3, 'Michael Johnson', 60000, 2),
       (4, 'Emily Davis', 52000, 2),
       (5, 'Robert Wilson', 75000, 3),
       (6, 'Sarah Brown', 48000, 3),
       (7, 'David Lee', 62000, 4),
       (8, 'Linda Clark', 58000, 4),
       (9, 'James Taylor', 59000, 1),
       (10, 'Mary Turner', 63000, 1),
       (11, 'William Carter', 67000, 2),
       (12, 'Patricia Evans', 54000, 2),
       (13, 'Richard Harris', 72000, 3),
       (14, 'Susan Martin', 49000, 3),
       (15, 'Charles White', 66000, 4),
       (16, 'Karen Anderson', 60000, 4),
       (17, 'Joseph Allen', 58000, 1),
       (18, 'Nancy Hall', 59000, 1),
       (19, 'Thomas Brown', 61000, 2),
       (20, 'Jennifer Adams', 53000, 2);

