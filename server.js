
// Performance Dashboard
const responsePerformanceAvailability = require('./performance-responses/region-performance-availability.json');
const responseAgentDropdown = require('./performance-responses/agent-dropdown.json');





const express = require('express')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')

const app = express()
const port = 5000

// Function to serve all static files
// inside public directory.
// app.use(express.static('public')); 
// app.use('/images', express.static('images'));

app.use(cors(corsOptions))



// Performance Dashboard
app.use('/agent-summary', require('./routes/agent-summary'))

app.get('/agent-dropdown', (req, res) => {
  res.json(responseAgentDropdown)
})

app.use('/group-summary', require('./routes/group-summary'))

app.use('/agent-image', require('./routes/agent-image'))

app.use('/performance-summary', require('./routes/performance-summary'))

// Assessment Tab
app.get('/region-performance-availability', (req, res) => {
  res.json(responsePerformanceAvailability)
})
app.use('/region-performance', require('./routes/region-performance'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})