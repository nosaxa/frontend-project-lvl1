import readlineSync from "readline-sync";

const askName = () => {
  const userName = readlineSync.question("May I have your name? ");
  return userName;
};

console.log("Welcome to the Brain Games!");
export const userName = askName();

export default () => {
  console.log(`Hello, ${userName}!`);
};
