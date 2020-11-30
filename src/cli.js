import readlineSync from 'readline-sync';

const lesson1 = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
};

export { lesson1 as default };
