const responseRegionPerformance = require('../responses-assessment/region-performance.json');
const responseRegionPerformance032022 = require('../responses-assessment/region-performance-03-2022.json');
const responseRegionPerformance032023 = require('../responses-assessment/region-performance-03-2023.json');

const responseRegionPerformanceMulti022023 = require('../responses-assessment/region-performance-multi-region-02-2023.json');
const responseRegionPerformanceMulti032023 = require('../responses-assessment/region-performance-multi-region-03-2023.json');

const express = require('express')
const router = express.Router()

router.route('/').get((req, res) => {
  const { year, month, regions } = req.query
  let responseJson = responseRegionPerformance;

  if (regions.length > 2) {
    if (month === '2') {
      responseJson = responseRegionPerformanceMulti022023
    }
    if (month === '3') {
      responseJson = responseRegionPerformanceMulti032023
    }
  } else {
      if (year === '2022') {
        if (month === '3') {
          responseJson = responseRegionPerformance032022
        }
      } else {
        if (month === '3') {
          responseJson = responseRegionPerformance032023
        }
      }
  }
  
  res.json(responseJson)
});

module.exports = router