import playGame from '../index.js';
import getRandomNumber from '../helpers.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const question = getRandomNumber();
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};

const even = () => playGame(message, getGameData);

export default even;
