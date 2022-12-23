var express = require('express');
var router = express.Router();

/* GET scratch listing. */
router.get('/', function(req, res, next) {
  throw new Error('uh oh...');
  res.send('GET request was recieved');
});

router.get('/:pathVar', function(req, res, next) {
  res.send(`GET request with path param '${req.params.pathVar}' was recieved`);
});

/* POST scratch listing. */
router.post('/', function(req, res, next) {
  res.send('POST request was recieved');
});


module.exports = router;
