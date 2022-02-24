let userName = prompt('enter your name');
console.log( `Hello, ${userName}!`);
let userQuestion = prompt('Ask the Magic Eight Ball a question');
console.log(`${userName} asked: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = ['It is certain', 'It is decidely so', 'Reply hazy try again', 'Cannot predict now', 'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes'];


if (randomNumber === 0) {
  console.log(`Magic eightball answer: ${eightBall[0]}`)
} else if (randomNumber === 1) {
  console.log(`Magic eightball answer: ${eightBall[1]}`)
} else if (randomNumber === 2) {
  console.log(`Magic eightball answer: ${eightBall[2]}`)
} else if (randomNumber === 3) {
  console.log(`Magic eightball answer: ${eightBall[3]}`)
} else if (randomNumber === 4) {
  console.log(`Magic eightball answer: ${eightBall[4]}`)
} else if (randomNumber === 5) {
  console.log(`Magic eightball answer: ${eightBall[5]}`)
} else if (randomNumber === 6) {
  console.log(`Magic eightball answer: ${eightBall[6]}`)
} else if (randomNumber === 7) {
  console.log(`Magic eightball answer: ${eightBall[7]}`)
}