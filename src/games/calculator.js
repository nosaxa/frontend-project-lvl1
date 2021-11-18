import playGame from '../index.js';
import getRandomNumber from '../helpers.js';

const message = 'What is the result of the expression?';

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const getGameData = () => {
  const operators = ['+', '*', '-'];
  const lastIndex = operators.length - 1;
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operation = operators[getRandomNumber(0, lastIndex)];
  const question = `${number1} ${operation} ${number2}`;
  const answer = String(calc(number1, number2, operation));

  return [question, answer];
};

const calculator = () => playGame(message, getGameData);

export default calculator;
