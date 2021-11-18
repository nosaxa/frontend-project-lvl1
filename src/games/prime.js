import playGame from '../index.js';
import getRandomNumber from '../helpers.js';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const number = getRandomNumber(1, 20);
  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
};

const prime = () => playGame(message, getGameData);

export default prime;
