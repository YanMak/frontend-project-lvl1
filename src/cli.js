import readlineSync from 'readline-sync';

const lesson1 = () => {
  //console.log('Welcome to the Brain Games!');
  //const name = readlineSync.question('May I have your name?: ');
  let name = getname();
  console.log(`Hello, herr ${name}`);
};

const getname = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  return name;
}

export { lesson1 as default };
