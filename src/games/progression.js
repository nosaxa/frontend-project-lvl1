import playGame from '../index.js';
import getRandomNumber from '../helpers.js';

const message = 'What number is missing in the progression?';

const getRandomProgression = (getRandom) => {
  const progression = [];
  const progressionLength = getRandom(5, 10);
  const sequence = getRandom(2, 5);
  let number = getRandom(1, 100);

  for (let i = 0; i < progressionLength; i += 1) {
    number += sequence;
    progression.push(number);
  }
  return progression;
};

const getGameData = () => {
  const newProgression = getRandomProgression(getRandomNumber);
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
