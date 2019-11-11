console.log('Welcome to BlackJack!')
//DOM variables
let newGameButton = document.getElementById('newGame-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');
let textArea = document.getElementById('text-area');

//Card arrays 
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values =['Ace', 'King', 'Queen', 'Jack','Ten', 
            'Nine', 'Eight', 'Seven','Six','Five',
            'Four', 'Three','Two','One'];

//Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards =[],
    dealerScore = 0,  
    playerScore=0,
    deck=[];

hitButton.style.display='none';
stayButton.style.display='none';
showStatus();

//buttons
newGameButton.addEventListener('click', function(){
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    suffleDeck(deck);
    dealerCards = [getNextCard(), getNextCard()];
    playeCards = [getNextCard(), getNextCard()];

    
    newGameButton.style.display='none';
    hitButton.style.display='inline';
    stayButton.style.display='inline';
    showStatus();
})


//CREATE DECK======================
function createDeck(){
    let deck=[];
    for(let suitIdx=0; suitIdx<suits.length; suitIdx++){
        for(let valueIdx=0; valueIdx<values.length; valueIdx++){
            let card ={
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push(card);
        }
    }
    return deck;
}
//=================================
function suffleDeck(deck){
    for(let i=0; i<deck.length; i++){
        let swapIdx = Math.trunc(Math.random()* deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }
}

//takes the first value of deck and shift all the others down
function getNextCard(){
    return deck.shift();
}


function getCardString(card){
    return card.value + ' of ' + card.suit;
}

function showStatus(){
    if(!gameStarted){
        textArea.innerText = "Welcome to Blackjack!";
        return;
    }

    for(var i=0; i<deck.length; i++){
        textArea.innerText += '\n' + getCardString(deck[i]);
    }
}

for(let i=0; i<deck.length; i++){
    //console.log(deck[i]);
}

let playeCards = [getNextCard(), getNextCard()]

// console.log("You were dealt:");
// console.log(getCardString(playeCards[0]), getCardString(playeCards[1]));

