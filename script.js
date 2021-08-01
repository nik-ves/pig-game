const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

const roll = () => {
    // generate random dice roll
    // display dice
    // check for rolled 1: if true, switch to next player

    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.png`;

    if (dice !== 1) {
        currentScore += dice;
        current0El.textContent = currentScore; // later will be changed to correct player
    } else {
        
    };
};

btnRoll.addEventListener('click', roll);