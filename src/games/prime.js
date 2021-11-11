import playGame from '../index.js';
import getRandomNumber from '../helpers.js';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGameData = () => {
  const number = getRandomNumber(1, 20);
  const dividers = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      dividers.push(i);
    }
  }
  const isPrime = dividers.length === 2 ? 'yes' : 'no';
  const question = number;
  const answer = isPrime;

  return [question, answer];
};

const prime = () => playGame(message, primeGameData);

export default prime;
