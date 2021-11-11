import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const message = 'Find the greatest common divisor of given numbers.';

const biggestDivider = (num1, num2) => {
  const biggestNumber = num1 > num2 ? num1 : num2;
  let divider = 1;
  for (let i = biggestNumber; i > 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divider = i;
      return divider;
    }
  }
  return divider;
};

const gsdGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = String(biggestDivider(number1, number2));

  return [question, answer];
};

const gsd = () => startGame(message, gsdGameData);

export default gsd;
