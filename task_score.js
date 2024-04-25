const firstName = "Katya";
const lastName = "Vaniukhina";

const introductionScore = 85;
const gitScore = 90;
const jsScore = 95;

const averageScore = (introductionScore + gitScore + jsScore) / 3;

console.log(
  `Student ${firstName.slice(
    0,
    1
  )}. ${lastName} has average score: ${averageScore}! Yayyy 😊`
);
