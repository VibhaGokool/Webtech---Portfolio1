const choices = document.querySelectorAll('.choice-card');
const resultText = document.getElementById('result-text');
const playerScoreEl = document.getElementById('player-score').querySelector('.score');
const aiScoreEl = document.getElementById('ai-score').querySelector('.score');
const roundCountEl = document.getElementById('round-count');
const resetBtn = document.getElementById('reset-btn');
const modeBtn = document.getElementById('mode-btn');
const playerChoiceEl = document.getElementById('player-choice');
const aiChoiceEl = document.getElementById('ai-choice');

let playerScore = 0;
let aiScore = 0;
let rounds = 0;
let isHardMode = false;

const getAIChoice = () => {
  if (isHardMode && rounds > 3) {
    const playerChoices = Array.from(choices).map(c =>
      parseInt(c.dataset.wins) || 0
    );
    const mostUsed = playerChoices.indexOf(Math.max(...playerChoices));
    return choices[(mostUsed + 1) % 3].dataset.choice;
  }
  return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
};

const updateChoiceDisplay = (element, choice) => {
  element.innerHTML = `
    <div class="choice-card">
      <div class="choice-emoji">${
        { rock: '🪨', paper: '📄', scissors: '✂️' }[choice]
      }</div>
      <h3>${choice.charAt(0).toUpperCase() + choice.slice(1)}</h3>
    </div>
  `;
};

const determineWinner = (player, ai) => {
  if (player === ai) return 'draw';
  const combos = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };
  return combos[player] === ai ? 'win' : 'lose';
};

const updateScores = (result) => {
  rounds++;
  roundCountEl.textContent = rounds;

  if (result === 'win') {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    resultText.innerHTML = `🎉 Victory! ${playerScore === 5 ? 'You won the match!' : ''}`;
    resultText.style.color = 'var(--win)';
  } else if (result === 'lose') {
    aiScore++;
    aiScoreEl.textContent = aiScore;
    resultText.innerHTML = `💥 Defeat! ${aiScore === 5 ? 'AI won the match!' : ''}`;
    resultText.style.color = 'var(--lose)';
  } else {
    resultText.textContent = '🤝 Draw!';
    resultText.style.color = 'var(--draw)';
  }

  if (playerScore === 5 || aiScore === 5) {
    setTimeout(() => {
      alert(playerScore === 5 ? '🏆 Champion!' : '🤖 AI Dominates!');
      resetGame();
    }, 500);
  }
};

const resetGame = () => {
  playerScore = 0;
  aiScore = 0;
  rounds = 0;
  playerScoreEl.textContent = '0';
  aiScoreEl.textContent = '0';
  roundCountEl.textContent = '0';
  resultText.textContent = 'Choose your weapon!';
  resultText.style.color = 'var(--text)';
  playerChoiceEl.innerHTML = '';
  aiChoiceEl.innerHTML = '';
};

const toggleMode = () => {
  isHardMode = !isHardMode;
  modeBtn.textContent = `${isHardMode ? '😈 Hard' : '😇 Easy'} Mode`;
  modeBtn.style.background = isHardMode ? 'var(--accent)' : 'var(--secondary)';
  resetGame();
};

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    if (playerScore >= 5 || aiScore >= 5) return;

    const playerChoice = choice.dataset.choice;
    const aiChoice = getAIChoice();

    updateChoiceDisplay(playerChoiceEl, playerChoice);
    updateChoiceDisplay(aiChoiceEl, aiChoice);

    const result = determineWinner(playerChoice, aiChoice);
    updateScores(result);

    choice.dataset.wins = (parseInt(choice.dataset.wins) || 0) + (result === 'win' ? 1 : 0);
  });
});

resetBtn.addEventListener('click', resetGame);
modeBtn.addEventListener('click', toggleMode);
