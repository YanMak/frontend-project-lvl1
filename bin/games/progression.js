export const progressionGame = () => {
  const progressionsSize = 5 + Math.floor(Math.random() * 10);
  const progressionFirstElem = Math.floor(Math.random() * 30);
  const progressionStep = Math.floor(Math.random() * 10);
  const HiddenEl = Math.floor(Math.random() * progressionsSize);

  const arr = [];
  let rightAnswer = '0';
  let currElemValue = progressionFirstElem;

  for (let i = 0; i < progressionsSize; i++) {
    if (i === HiddenEl) {
      rightAnswer = currElemValue;
      arr.push('...');
    } else {
      // arr.push(arr[arr.length-1] + progressionStep);
      arr.push(currElemValue);
    }
    currElemValue += progressionStep;
  }

  rightAnswer = String(rightAnswer);
  const question = arr.join(',');

  return { question, rightAnswer };
};
