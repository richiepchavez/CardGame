/* suggests using numbers as strings because of king and queen cards

reference last project. made player1 always wins class using checkWin
return Plaer 1 wins

card will have render function - createed elements for section, h1/h2 for rank and suit heading
*/

class Card {
    constructor(rank, suit){
        this.rank = rank;
        this.suit = suit;
    }
}

class Hand {
    constructor(card){
        this.card = card;
    }


    addCard(card){
// it will return a card to the hand
    return card;
    }


    playerCard(card){
//remove card and return specified card from hand
// will return null card is not in hand
// if statement 
// define variable for cardChoice
let cardChoice;
    if (cardChoice === card){
        return this.card;
    } else {
        return null;
    }
  }
}


//A Hand has one property: an array of cards.

// const newCard = new Hand([])