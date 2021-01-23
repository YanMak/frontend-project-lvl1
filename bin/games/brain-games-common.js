export const introText = () => 'Welcome to the Brain Games!';

export const askNameText = () => 'May I have your name?: ';

export const greetingText = (name) => `Heil, ${name}!`;

export const gameRoundQuestionText = (question) => `Question: ${question}`;

export const wrongAnswerText = (answer, rightAnswer) => `"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`;

export const tryAgainText = (name) => `Let's try again, herr ${name}`;

export const congratulationsText = (name) => `Congratulations, herr ${name}!`;

export const correctText = () => 'Correct!';

export const inputAnswerText = () => 'Your answer: ';

export const gameQuestion = (gameName) => {
  if (gameName === 'even') { return 'Answer "yes" if the number is even, otherwise answer "no".'; }
  if (gameName === 'calc') {
    return 'What is the result of the expression?';
  }
  if (gameName === 'gcd') {
    return 'Find the greatest common divisor of given numbers.';
  }
  if (gameName === 'progression') {
    return 'What number is missing in the progression?';
  }
  if (gameName === 'prime') {
    return 'Answer "yes" if given number is prime. Otherwise answer "no".';
  }
};
// 'What is the result of the expression?'//calculator text
// 'Answer "yes" if the number is even, otherwise answer "no"'//even text

// export { lesson1 as default };
