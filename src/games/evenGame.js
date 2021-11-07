import readlineSync from "readline-sync";
import { userName } from "../cli.js";

const randomNumber = () => Math.floor(Math.random() * 100);

export default () => {
  let wins = 0;
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) {
    const num = randomNumber();
    const correctAnswer = num % 2 === 0 ? "yes" : "no";
    console.log(`Question: ${num}`);
    const answer = readlineSync.question(`Your answer: `);
    if (answer === correctAnswer) {
      wins += 1;
      const isEnd = wins === 3 ? `Congratulations, ${userName}` : "";
      console.log("Correct!");
      console.log(isEnd);
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again ${userName}`
      );
      break;
    }
  }
};
