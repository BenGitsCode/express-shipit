'use strict';

const controller = require('lib/wiring/controller');

/* GET home page. */
const root = (req, res) => {
  res.json({
    index: {
      title: 'It works on my machine',
      environment: req.app.get('env'),
    },
  });
};

module.exports = controller({
  root,
});
