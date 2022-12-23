var express = require('express');
const Card = require('../resources/cards/Card');
const Deck = require('../resources/cards/Deck');
var router = express.Router();

/* GET scratch listing. */
router.get('/', function(req, res, next) {
  throw new Error('uh oh...');
  res.send('GET request was recieved');
});

router.get('/card', function(req, res, next) {
  res.send(new Card('test', 1, 'sample card'));
});

router.get('/deck', function(req, res, next) {
  const deck = new Deck();
  res.send(deck.cards);
});

router.get('/:pathVar', function(req, res, next) {
  res.send(`GET request with path param '${req.params.pathVar}' was recieved`);
});

/* POST scratch listing. */
router.post('/', function(req, res, next) {
  res.send('POST request was recieved');
});


module.exports = router;
