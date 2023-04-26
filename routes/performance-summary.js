
const responsePerformanceSummary06021 = require('../performance-responses/performance-summary-06021.json');

const express = require('express')
const router = express.Router()

router.route('/:id').get((req, res) => {
  const { format } = req.query
  let responseJson = responsePerformanceSummary06021;
  
  if (format === 'csv') {
    const users = [
      { name: "Patricia", surname: "Smith", age: null },
      { name: "John", surname: null, age: 56 },
      { name: "Maria", surname: "Brown", age: 37 },
    ]
    // initializing the CSV string content with the headers
    let csvData = ["name", "surname", "age"].join(",") + "\r\n"
    users.forEach((user) => {
      // populating the CSV content
      // and converting the null fields to ""
      csvData += [user.name, user.surname, user.age].join(",") + "\r\n"
    })
    res
      .set({
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="users.csv"`,
      })
      .send(csvData)

  } else {
    res.json(responseJson)
  }
});

module.exports = router