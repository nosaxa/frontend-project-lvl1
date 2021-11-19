import playGame from '../index.js';
import getRandomNumber from '../helpers.js';

const message = 'What number is missing in the progression?';

const getRandomProgression = (firstItem, sequence, length) => {
  const progression = [];
  let step = firstItem;
  for (let i = 0; i < length; i += 1) {
    progression.push(step);
    step += sequence;
  }
  return progression;
};

const getGameData = () => {
  const newProgression = getRandomProgression(
    getRandomNumber(1, 100),
    getRandomNumber(3, 8),
    getRandomNumber(5, 10),
  );
  const lastIndex = newProgression.length - 1;
  const hiddenIndex = getRandomNumber(1, lastIndex);
  const hiddenNumber = newProgression[hiddenIndex];
  newProgression[hiddenIndex] = '..';
  const question = newProgression.join(' ');
  const answer = String(hiddenNumber);

  return [question, answer];
};

const progression = () => playGame(message, getGameData);

export default progression;
