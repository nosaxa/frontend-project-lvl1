import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGameData = () => {
  const question = getRandomNumber();
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

const even = () => startGame(message, evenGameData);

export default even;
