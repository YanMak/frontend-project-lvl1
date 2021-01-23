import readlineSync from 'readline-sync';
import { askNameText, inputAnswerText } from './brain-games-common.js';

export const askAnswer = () => {
  const answer = readlineSync.question(inputAnswerText);
  return answer;
};

export const askUserName = () => {
  const name = readlineSync.question(askNameText());
  return name;
};
