export const calcGame = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const action = Math.floor(Math.random() * 3);
  const actionsArr = ['+', '-', '*'];

  const question = `${number1} ${actionsArr[action]} ${number2}`;
  let rightAnswer = 0;
  if  (actionsArr[action] === '+'){
    rightAnswer = number1 + number2;
  }
  if  (actionsArr[action] === '-'){
    rightAnswer = number1 - number2;
  }
  if  (actionsArr[action] === '*'){
    rightAnswer = number1 * number2;
  }
  rightAnswer = String(rightAnswer)
  return {question, rightAnswer};
  
}