const PLAYER_ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 10;
const REVIVE_HEALTH_PERCENTAGE = 0.1;
const LOG_EVENTS = {
  TARGET_PLAYER: 'Player',
  TARGET_MONSTER: 'Monster',
  PLAYER_ATTACK: 'Player Attacks',
  PLAYER_STRONG_ATTACK: 'Player Strong Attacks',
  PLAYER_HEAL: 'Player Heals',
  PLAYER_REVIVAL: 'Player Revived',
  PLAYER_REVIVAL_VALUE: '10% health on Revival',
  MONSTER_ATTACK: 'Monster Attacks',
  PLAYER_WON: 'Player Won!',
  MONSTER_WON: 'Monster Won!',
  DRAW: "it's a Draw!",
  BATTLE_RESULT: "Battle Result"
};

let battleLogEntries = [];

const enteredValue = prompt('choose Health of Monster', 100);
let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}
let currentMonsterHealthbar = chosenMaxLife;
let currentPlayerHealthbar = chosenMaxLife;
let bonusLife = true;


adjustHealthBars(chosenMaxLife);

function battleLog(event, value, target, playerHealth, monsterHealth) {
  let battleEntry = {
    event: event,
    value: value,
    target: target,
    playerHealth: playerHealth,
    monsterHealth: monsterHealth
  };
  battleLogEntries.push(battleEntry);
}

function reset() {
  currentPlayerHealthbar = chosenMaxLife;
  currentMonsterHealthbar = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealthbar -= monsterDamage;

  battleLog(
    LOG_EVENTS.MONSTER_ATTACK,
    monsterDamage,
    LOG_EVENTS.TARGET_MONSTER,
    currentPlayerHealthbar,
    currentMonsterHealthbar
  );

  if (currentPlayerHealthbar <= 0 && bonusLife) {
    bonusLife = false;
    removeBonusLife();
    currentPlayerHealthbar = chosenMaxLife * REVIVE_HEALTH_PERCENTAGE;
    setPlayerHealth(currentPlayerHealthbar);
    battleLog(
      LOG_EVENTS.PLAYER_REVIVAL,
      LOG_EVENTS.PLAYER_REVIVAL_VALUE,
      LOG_EVENTS.TARGET_PLAYER,
      currentPlayerHealthbar,
      currentMonsterHealthbar
    );
    alert('you have revived');
  }

  if (currentMonsterHealthbar <= 0 && currentPlayerHealthbar > 0) {
    battleLog(
      LOG_EVENTS.BATTLE_RESULT,
      LOG_EVENTS.PLAYER_WON,
      LOG_EVENTS.TARGET_PLAYER,
      currentPlayerHealthbar,
      currentMonsterHealthbar
    );
    alert("You won!");
  } else if (currentPlayerHealthbar <= 0 && currentMonsterHealthbar > 0) {
    battleLog(
      LOG_EVENTS.BATTLE_RESULT,
      LOG_EVENTS.MONSTER_WON,
      LOG_EVENTS.TARGET_MONSTER,
      currentPlayerHealthbar,
      currentMonsterHealthbar
    );
    alert("monster won!");
  } else if (currentMonsterHealthbar <= 0 && currentPlayerHealthbar <= 0) {
    battleLog(
      LOG_EVENTS.BATTLE_RESULT,
      LOG_EVENTS.DRAW,
      LOG_EVENTS.TARGET_MONSTER,
      currentPlayerHealthbar,
      currentMonsterHealthbar
    );
    alert("its a draw!");
  }

  if (currentMonsterHealthbar <= 0 || currentPlayerHealthbar <= 0) {
    reset();
  }
}

function atkMonster(atkValue, type) {
  const playerDamage = dealMonsterDamage(atkValue);
  currentMonsterHealthbar -= playerDamage;
  battleLog(
    type,
    playerDamage,
    LOG_EVENTS.TARGET_PLAYER,
    currentPlayerHealthbar,
    currentMonsterHealthbar
  );
  endRound();
}

function atkHandler() {
  atkMonster(PLAYER_ATTACK_VALUE, LOG_EVENTS.PLAYER_ATTACK);
}

function strongAtkHandler() {
  atkMonster(STRONG_ATTACK_VALUE, LOG_EVENTS.PLAYER_STRONG_ATTACK);
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealthbar >= chosenMaxLife - HEAL_VALUE) {
    healValue = chosenMaxLife - currentPlayerHealthbar;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealthbar += healValue;
  battleLog(
    LOG_EVENTS.PLAYER_HEAL,
    healValue,
    LOG_EVENTS.TARGET_PLAYER,
    currentPlayerHealthbar,
    currentMonsterHealthbar
  );
  endRound();
}

function logHandler() {
  console.log(battleLogEntries);
}

attackBtn.addEventListener('click', atkHandler);
strongAttackBtn.addEventListener('click', strongAtkHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', logHandler);