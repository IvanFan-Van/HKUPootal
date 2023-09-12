-- # Select max salary from each department
-- # SELECT MAX(emp_salary) AS max_salary,
-- #        dept_id,
-- #        emp_id
-- # FROM employee
-- # GROUP BY dept_id;


SELECT
       e.emp_name,
       e.emp_salary,
       d.dept_name
FROM
    employee e
    JOIN
        (SELECT MAX(emp_salary) AS max_salary
        FROM employee
        GROUP BY dept_id) subquery
    ON subquery.max_salary = e.emp_salary
    JOIN department d
    ON d.dept_id = e.dept_id
    ORDER BY d.dept_name ASC;

