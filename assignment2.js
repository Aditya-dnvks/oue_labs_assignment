const requiredSqlQuery = `
SELECT
  customers.customerId,
  name,
  GROUP_CONCAT(subjects.subjectName) AS subjects
FROM
  customers
  INNER JOIN mapping ON customers.customerId = mapping.customerId
  INNER JOIN subjects ON mapping.subjectId = subjects.subjectId
GROUP BY
  customers.name
ORDER BY
  customers.customerId;
`
