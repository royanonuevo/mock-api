const responseAgentSummary = require('../performance-responses/agent-summary.json');
const responseAgentSummary06021 = require('../performance-responses/agent-summary-06021.json');
const responseAgentSummary06895 = require('../performance-responses/agent-summary-06895.json');
const responseAgentSummary07013 = require('../performance-responses/agent-summary-07013.json');

const express = require('express')
const router = express.Router()

router.route('/').get((req, res) => {
  const { id } = req.params;
  let responseJson = responseAgentSummary;

  res.json(responseJson)
});

router.route('/:id').get((req, res) => {
  const { id } = req.params;
  let responseJson = responseAgentSummary;
  
  if (id === '06021') {
    responseJson = responseAgentSummary06021;
  }

  if (id === '06895') {
    responseJson = responseAgentSummary06895;
  }

  if (id === '07013') {
    responseJson = responseAgentSummary07013;
  }
  
  res.json(responseJson)
});

module.exports = router