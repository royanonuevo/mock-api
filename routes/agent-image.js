const express = require('express')
const path = require('path')
const router = express.Router()

router.route('/:id').get((req, res) => {
  const id = req.params.id;
  let file = path.join(__dirname, 'images/06895.png');

  if (id === '06021') {
    file = path.join(__dirname, 'images/06021.png')
  }

  if (id === '07013') {
    file = path.join(__dirname, 'images/07013.png')
  }


  res.sendFile(file, function(err) {
    if (err) {
        return res.status(err.status).end();
    } else {
        return res.status(200).end();
    }
  });
});

module.exports = router