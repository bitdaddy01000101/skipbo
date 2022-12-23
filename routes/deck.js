var express = require('express');
const Deck = require('../resources/cards/Deck');
var router = express.Router();

/* GET endpoints */
router.get('/', function(req, res, next) {
  const deck = new Deck();
  res.send(Array.from(deck.cards));
});

module.exports = router;
