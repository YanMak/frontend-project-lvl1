export const gcdGame = () => {
  const number1_ = Math.floor(Math.random() * 10);
  const number2_ = Math.floor(Math.random() * 10);
  const divider = Math.floor(Math.random() * 100);
  const number1 = number1_*divider;
  const number2 = number2_*divider;

  const question = `${number1} ${number2}`;
  const minNumber = Math.floor(Math.min(number1, number2) / 2);
  let gcd = 0;
  
  for (let i = minNumber; i > 2; i--) {
    if (number1 % i === 0 && number2 % i === 0) {
        gcd = i;
      break;
    }
  }

  let rightAnswer = String(gcd);
  return { question, rightAnswer };
};
