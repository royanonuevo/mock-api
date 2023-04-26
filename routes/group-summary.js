
const responseGroupSummaryBranch06895 = require('../performance-responses/group-summary-branch-06895.json');
const responseGroupSummaryBranch06021 = require('../performance-responses/group-summary-branch-06021.json');
const responseGroupSummaryAgency06895 = require('../performance-responses/group-summary-agency-06895.json');
const responseGroupSummaryAgency06021 = require('../performance-responses/group-summary-agency-06021.json');

const express = require('express')
const router = express.Router()

router.route('/:id').get((req, res) => {
  const { id } = req.params;
  let responseJson;

  const { group } = req.query

  if (group === 'agency') {
    responseJson = responseGroupSummaryAgency06895;

    if (id === '06021') {
      responseJson = responseGroupSummaryAgency06021;
    }
  } else { // branch
    responseJson = responseGroupSummaryBranch06895;
    
    if (id === '06021') {
      responseJson = responseGroupSummaryBranch06021;
    }
  }
  
  res.json(responseJson)
});

module.exports = router