const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
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

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = () => {
    const currentPlayer = document.querySelector(`#current--${activePlayer}`);

    currentPlayer.textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

const roll = () => {
    // generate random dice roll
    // display dice
    // check for rolled 1: if true, switch to next player

    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden');
        diceEl.src = `img/dice-${dice}.png`;

        if (dice !== 1) {
            const currentPlayer = document.querySelector(`#current--${activePlayer}`);
            currentScore += dice;
            currentPlayer.textContent = currentScore;
        } else {
            switchPlayer();
        };
    }
};

const hold = () => {
    // add current score to active players score
    // check if players score is >= 100
    // finish game and if not switch to other player

    if (playing) {
        scores[activePlayer] += currentScore;

        const playerScore = document.querySelector(`#score--${activePlayer}`);
        playerScore.textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        };
    };
};

btnRoll.addEventListener('click', roll);
btnHold.addEventListener('click', hold);