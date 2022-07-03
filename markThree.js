var readline = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Rushi",
    score: 3,
  },
  {
    name: "Sahil",
    score: 1,
  },
];
var questions = [
  {
    question: "where do i live ?",
    answer: "pune",
  },
  {
    question: "My favourite superhero ?",
    answer: "ironman",
  },
  {
    question: "My favourite actress ?",
    answer: "sunny",
  },
];

function welcome() {
  var name = readline.question("May i have your name ?");
  console.log("Welcome " + name);
}
function play(question, answer) {
  var userAns = readline.question(question);
  if (answer === userAns) {
    console.log("correct");
    console.log(++score);
  } else {
    console.log("wrong");
    console.log(--score);
  }
}
function game() {
  for (let i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer);
  }
}

function getScores() {
  console.log("Yay you have scored: " + score);
  highScores.map((score) => console.log(score.name, ":", score.score));
}

welcome();
game();
getScores();
