import { askAnswer, askUserName } from './games/brain-games-io.js';
import {
  introText, askNameText, greetingText, gameRoundQuestionText, wrongAnswerText, tryAgainText, 
  congratulationsText, inputAnswerText, correctText, gameQuestion,
} from './games/brain-games-common.js';
import { evenGame } from './games/even.js';
import { calcGame } from './games/calc.js';
import { gcdGame } from './games/gcd.js';
import { progressionGame } from './games/progression.js';
import { primeGame } from './games/prime.js';

export const startGame = (gameName) => {
  // intro
  console.log(introText());
  // ask name
  const userName = askUserName();
  // greeting
  console.log(greetingText(userName));
  // ask question intro
  console.log(gameQuestion(gameName));

  const roundsCount = 3;
  let rightAnswers = 0;
  for (let i = 0; i < roundsCount; i++) {
    // get question and right answer
    const gameRound = playRound(gameName);
    console.log(gameRoundQuestionText(gameRound.question));
    console.log('game round data');
    console.log(gameRound);
    const userAnswer = askAnswer();
    console.log(`user answer ${ userAnswer }`);
    if (userAnswer === gameRound.rightAnswer) {
      console.log(correctText());
      rightAnswers++;
    } else {
      console.log(wrongAnswerText(userAnswer, gameRound.rightAnswer));
      console.log(tryAgainText(userName));
      break;
    }
  }
  if (rightAnswers === roundsCount){
    console.log(congratulationsText(userName));
  }
};

const playRound = (gameName) => {
  if (gameName === 'even') { return evenGame(); }
  if (gameName === 'calc') { return calcGame(); }
  if (gameName === 'gcd') { return gcdGame(); }
  if (gameName === 'progression') {
    return progressionGame();
  }
  if (gameName === 'prime') {
    return primeGame();
  }
};

