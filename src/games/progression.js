import startGame from "../index.js";
import getRandomNumber from "../helpers.js";

const message = `What number is missing in the progression?`;

const randomProgression = () => {
  const progression = [];
  const progressionLength = getRandomNumber(5, 10);
  const sequence = getRandomNumber(2, 5);
  let number = getRandomNumber(1, 100);

  for (let i = 0; i < progressionLength; i += 1) {
    number += sequence;
    progression.push(number);
  }
  return progression;
};

const progressionGameData = () => {
  const arr = randomProgression();
  const lastIndex = arr.length - 1;
  const hiddenIndex = getRandomNumber(1, lastIndex);
  const hiddenNumber = arr[hiddenIndex];
  arr[hiddenIndex] = "...";
  // const question = arr.join(" ");
  const question = arr.join(" ").split(",");
  const answer = String(hiddenNumber);

  return [question, answer];
};

const progression = () => startGame(message, progressionGameData);

export default progression;
