SELECT emp_name,
       emp_salary
FROM
    Employee e
JOIN
    (
        SELECT
            MAX(e.emp_salary) AS max_salary,
            e.emp_id,
            d.dept_name
        FROM Employee e
        JOIN Department d
        ON d.dept_id = e.dept_id
        GROUP BY d.dept_id
    ) subquery
ON  e.emp_id = subquery.emp_id
ORDER BY
    subquery.dept_name ASC