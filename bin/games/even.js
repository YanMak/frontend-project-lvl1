const isEven = (a) => {
  if (a <= 1) {
    return true;
  }
  if (a % 2 === 0) {
    return true;
  }
  return false;
};

export const evenGame = () => {
  const result = Math.floor(Math.random() * 100);
  const numberIsEven = isEven(result);
  const yesAnswer = 'yes';
  const noAnswer = 'no';
  const rightAnswer = (numberIsEven) ? yesAnswer : noAnswer;

  return { question: result, rightAnswer };
};

/*
const evenCheck = () => {
  const name = getname();
  console.log(`Hello, herr ${name}`);
  const yesAnswer = 'yes';
  const noAnswer = 'no';
  console.log(`Answer "${yesAnswer}" if the number is even, otherwise answer ""${noAnswer}"".`);
  // const answer = readlineSync.question('Answer "yes" if the number is even, otherwise answer "no".');
  let rightAnswersCount = 0;
  for (let i = 0; i < 3; i++) {
    // const seq = new Random(100);
    const result1 = Math.floor(Math.random() * 100);
    console.log(`Question: ${result1}`);
    const answer = readlineSync.question('Your answer: ');
    const numberIsEven = isEven(result1);
    const rightAnswer = (numberIsEven) ? yesAnswer : noAnswer;
    const wrongAnswer = (!numberIsEven) ? yesAnswer : noAnswer;
    if (rightAnswer === answer) {
      console.log('Correct!');
      rightAnswersCount++;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, herr ${name}`);
      break;
    }
  }
  if (rightAnswersCount === 3) {
    console.log(`Congratulations, herr ${name}!`);
  }
};
*/

// export { evenCheck as default };
