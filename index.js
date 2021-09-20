const chalk = require("chalk");
const readlineSync = require("readline-sync");

let score = 0;
let highScore = [{ name: "Pranjal", score: "5" }];
let userName;

function formQuestionAnswerPair(question, answer) {
  return {
    question,
    answer,
  };
}
let questions = [
  formQuestionAnswerPair("Where do I live?\n", "lucknow"),
  formQuestionAnswerPair("Who is my favourite superhero?\n", "iron man"),
  formQuestionAnswerPair("How old am I, imagine it's 2021?\n", "21"),
  formQuestionAnswerPair("What is my nickname?\n", "Golu"),
  formQuestionAnswerPair("My birthday falls in which month?\n", "May"),
];

function welcomeUser() {
  userName = readlineSync.question(chalk.yellow("Hi, What is your Name?\n"));
  console.log(
    chalk.yellow(
      "Welcome " + userName + ", Let's see how much you know Pranjal!"
    )
  );
}

function askQuestion(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (
    userAnswer.toUpperCase().replace(" ", "") ===
    answer.toUpperCase().replace(" ", "")
  ) {
    score++;
    console.log(chalk.green("That's correct!!"));
  } else {
    console.log(chalk.red("WRONG!"));
  }
}

function startGame() {
  for (let item = 0; item < questions.length; item++) {
    askQuestion(questions[item].question, questions[item].answer);
    console.log("current score : " + chalk.yellow(score) + "\n-----------");
  }
  highScore[1] = { name: userName, score: score };
}

function displayScores() {
  console.log(
    chalk.bold.yellowBright("\nTHANKS FOR PLAYING!\nFinal Score = " + score)
  );
  console.log("\nLet's see the highscores\n{");
  highScore.map((score) => console.log(" " + score.name + " : " + score.score));
  console.log("}");
}

welcomeUser();
startGame();
displayScores();
