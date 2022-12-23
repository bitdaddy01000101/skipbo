const Card = require('./Card');

class Deck {
    constructor() {
        const newCards = getDeck();
        shuffleDeck(newCards);
        this.cards = new Set(newCards);
        console.log(this.cards);
    }

    get cards() {
        return this._cards;
    }

    set cards(deck) {
        this._cards = deck;
    }
}

const cardDescriptions = {
    0: 'SKIP-BO',
    1: 'ONE',
    2: 'TWO',
    3: 'THREE',
    4: 'FOUR',
    5: 'FIVE',
    6: 'SIX',
    7: 'SEVEN',
    8: 'EIGHT',
    9: 'NINE',
    10: 'TEN',
    11: 'ELEVEN',
    12: 'TWELVE'
}

const [skipboValue, skipboDescription] = Object.entries(cardDescriptions)[0];

function getDeck() {
    const deck = [];

    for (let i = 0; i < 18; i++) {
        if (i < 12) {
            Object.entries(cardDescriptions).forEach(([value, description]) => {
                deck.push(new Card(`${description}-${i}`, value, description));
            });
        } else {
            deck.push(new Card(`${skipboDescription}-${i}`, skipboValue, skipboDescription));
        }
    }

    return deck;
}

function shuffleDeck(deck) {
    deck.sort(() => Math.random() - 0.5);
}

module.exports = Deck;