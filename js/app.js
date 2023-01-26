'use strict';

let userName = prompt('Hi there! What is your name?  ');
//console.log('Hello ' + userName + ', lets see how well you know Kirk!');
alert('Hello ' + userName + ', lets see how well you know Kirk!');

let totalScore = 0;

//QUESTION 1
function q1() {
  let doILikeStarWars = prompt('First Question: Do I like Star Wars?  ').toLowerCase();
  if (doILikeStarWars === 'yes' || doILikeStarWars === 'y'){
    //console.log('You are correct!');
    alert('You are correct!');
    totalScore++;
  }
  else if (doILikeStarWars === 'no' || doILikeStarWars === 'n'){
    //console.log('Incorrect. I love star wars!');
    alert('Incorrect. I love star wars!');
  }
  else{
    //console.log('Sorry, that was an invalid answer to that question');
    alert('Sorry, that was an invalid answer to that question');
  }
}

//QUESTION 2
function q2() {
  let doILikeChess = prompt('Question 2: Do I like Chess?  ').toLowerCase();
  if (doILikeChess === 'yes' || doILikeChess === 'y'){
    //console.log('You are correct!');
    alert('You are correct!');
    totalScore++;
  }
  else if (doILikeChess === 'no' || doILikeChess === 'n'){
    //console.log('Incorrect. I love CHESS!');
    alert('Incorrect. I love Chess!');
  }
  else{
    //console.log('Sorry, that was an invalid answer to that question');
    alert('Sorry, that was an invalid answer to that question');
  }
}
//QUESTION 3
function q3() {
  let doILikeSweets = prompt('Question 3: Do I like Sweets?  ').toLowerCase();
  if (doILikeSweets === 'yes' || doILikeSweets === 'y'){
    //console.log('You are incorrect, I do not like sweets!');
    alert('You are incorrect, I do not like sweets!');
  }
  else if (doILikeSweets === 'no' || doILikeSweets === 'n'){
    //console.log('Correct! I am not much of a sweets guy.');
    alert('Correct! I am not much of a sweets guy.');
    totalScore++;
  }
  else{
    //console.log('Sorry, that was an invalid answer to that question');
    alert('Sorry, that was an invalid answer to that question');
  }
}

//QUESTION 4
let originCountry = prompt('Question 4: Whas my country of origin Ukraine?  ').toLowerCase();
if (originCountry === 'yes' || originCountry === 'y'){
  //console.log('You are incorrect!');
  alert('You are incorrect! My country of origin is Kazakstan');
}
else if (originCountry === 'no' || originCountry === 'n'){
  //console.log('Correct!');
  alert('Correct. I am from Kazakhstan!');
  totalScore++;
}
else{
  //console.log('Sorry, that was an invalid answer to that question');
  alert('Sorry, that was an invalid answer to that question');
}

//QUESTION 5
let yearMoved = prompt('Question 5: Did I move to the US in 1995?  ');
if (yearMoved === 'yes' || yearMoved === 'y'){
  //console.log('You are incorrect!');
  alert('You are incorrect! I moved to the US in 2000');
}
else if (yearMoved === 'no' || yearMoved === 'n'){
  //console.log('Correct!');
  alert('Correct. I cam from Kazakhstan in 2000!');
  totalScore++;
}
else{
  //console.log('Sorry, that was an invalid answer to that question');
  alert('Sorry, that was an invalid answer to that question');
}

// QUESTION 6
for(let i=4; i>0; i--){
  let userNum = parseInt(prompt(`Guess a number between 1 and 10, you have ${i} tries remaining:  `));

  if (userNum===5){
    alert('Correct!');
    totalScore++;
    break;
  }
  else if (userNum > 10 || userNum <0){
    if (i===1){
      alert('That was your last try, sorry! The correct answer was 5.');
      break;
    }
    else{
      alert('That\'s not even between 1 and 10! Guess again: ');
    }
  }
  else if (userNum > 5){
    if (i===1){
      alert('That was your last try, sorry! The correct answer was 5.');
      break;
    }
    else{
      alert('Too high! Guess again: ');
    }
  }
  else if (userNum < 5){
    if (i===1){
      alert('That was your last try, sorry! The correct answer was 5.');
      break;
    }
    else{
      alert('Too low! Guess again: ');
    }
  }
  else {
    if (i===1){
      alert('That was your last try, sorry! The correct answer was 5.');
      break;
    }
    else{
      alert('That\'s not even a number! Guess again: ');
    }
  }
}

// QUESTION 7
let vacay = ['cancun', 'bora bora', 'florida', 'rome', 'greece', 'california'];
let userGuess = prompt('Guess where I want to go on vacation (you have 6 guesses, and you will be scored): ').toLowerCase();
let score = 0;
let userCorrect = false;

for (let i = 5; i > 0; i--){
  for (let j = 0; j<=vacay.length; j++){
    if (userGuess === vacay[j]){
      userCorrect = true;
      vacay.splice(j,1);
    }
  }
  if (userCorrect) {
    userCorrect = false;
    score++;
    userGuess = prompt(`That's correct! Let's see how many you can get right, you have ${i} tries remaining: `);
  }
  else{
    userGuess = prompt(`Incorrect. Let's see how many you can get right, you have ${i} tries remaining: `);
  }
}
alert(`Finished! Your score for Kirks vacation questionnaire is ${100*(score/6)}%. The places Kirk wanted to go for vacation were: ${vacay}`);
//console.log('Thank you ' + userName + ', hopefully you know Kirk a bit more!');
alert(`Your total score (from this whole questionnaire) for knowing about Kirk is a total of ${score+totalScore}/12, or a percentage of ${((score+totalScore)/12)*100}%`);
alert('Thank you ' + userName + ', hopefully you know Kirk a bit more!');

q1();
q2();
q2();
