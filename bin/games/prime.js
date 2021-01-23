export const primeGame = () => {
  const number = Math.floor(Math.random() * 1000);

  const question = `${number}`;

  const yesAnswer = 'yes';
  const noAnswer = 'no';

  const rightAnswer = (isPrime(number)) ? yesAnswer : noAnswer;
  return { question, rightAnswer };
};

const isPrime = (number) => {
  let divider = 0;

  for (let i = Math.floor(number / 2); i > 2; i--) {
    if (number % i === 0) {
      divider = i;
      break;
    }
  }
  if (divider === 0 || divider === number) { return true; }
  return false;
};
