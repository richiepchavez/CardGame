/* suggests using numbers as strings because of king and queen cards

reference last project. made player1 always wins class using checkWin
return Plaer 1 wins

card will have render function - createed elements for section, h1/h2 for rank and suit heading
*/

class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
}

class Hand {
    constructor(card) {
        this.card = card;
    }


    addCard(card) {
        // it will return a card to the hand
        return card;
    }


    playerCard(card) {
        //remove card and return specified card from hand
        // will return null card is not in hand
        // if statement 
        // define variable for cardChoice
        let cardChoice;
        if (cardChoice === card) {
            return this.card;
        } else {
            return null;
        }
    }
}

//A Hand has one property: an array of cards.

// const newCard = new Hand([])


class Deck {
    constructor(ranks, suits, card) {
        this.ranks = ranks;
        this.suits = suits;
        this.card = card;
    }


    // populate deck with initial array of cards
    // We will have to use Math.random()
    generateCards() {

        let suit1 = ["spades", "diamonds", "clubs", "hearts"];

        let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

        let completeCards = [];


        for (let i = 0; i < suit1.length; i++) {
            for (let j = 0; j < values.length; j++) {
                // console.log(suit1[i]);
                // console.log(values[j]);
                completeCards.push({ suit: suit1[i], values: values[j] });
            }
        } console.log(completeCards);
    }


    shuffleCards() {
        for (let i = completeCards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = completeCards[i];
            completeCards[i] = completeCards[j];
            completeCards[j] = temp;
        }
        // display 5 results
        for (let i = 0; i < 5; i++) {
            console.log(`${completeCards[i].Value} of ${completeCards[i].Suit}`)
        }

    }
}

const deck1 = new Deck ("10","diamond", "red");
console.log(deck1.shuffleCards());


