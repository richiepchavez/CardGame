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
    constructor() {
        this.ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.suits = ["spades", "diamonds", "clubs", "hearts"];
        this.cards = [];
    }


    // populate deck with initial array of cards
    // We will have to use Math.random()
    generateCards() {
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
                this.cards.push(new Card(this.ranks[j], this.suits[i]));
            }
        }
    }

    shuffleCards() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    draw(){
       let newArray = (this.cards.splice(-1));
        return console.log(newArray);
    }
    deal(numHands, cardsPerHand){
     //cards per hand will return array
     
     //numHands = players
    }
}




const deck1 = new Deck();
deck1.generateCards();
deck1.shuffleCards();
deck1.draw();
deck1.draw();
deck1.draw();
deck1.draw();
deck1.draw();
console.log(deck1.cards)
// console.log(deck1.cards);

