'use strict';

let userName = prompt('Hi there! What is your name?  ');
//console.log('Hello ' + userName + ', lets see how well you know Kirk!');
alert('Hello ' + userName + ', lets see how well you know Kirk!');


//QUESTION 1
let doILikeStarWars = prompt('First Question: Do I like Star Wars?  ').toLowerCase();
if (doILikeStarWars === 'yes' || doILikeStarWars === 'y'){
  //console.log('You are correct!');
  alert('You are correct!');
}
else if (doILikeStarWars === 'no' || doILikeStarWars === 'n'){
  //console.log('Incorrect. I love star wars!');
  alert('Incorrect. I love star wars!');
}
else{
  //console.log('Sorry, that was an invalid answer to that question');
  alert('Sorry, that was an invalid answer to that question');
}

//QUESTION 2
let doILikeChess = prompt('Question 2: Do I like Chess?  ').toLowerCase();
if (doILikeChess === 'yes' || doILikeChess === 'y'){
  //console.log('You are correct!');
  alert('You are correct!');
}
else if (doILikeChess === 'no' || doILikeChess === 'n'){
  //console.log('Incorrect. I love CHESS!');
  alert('Incorrect. I love Chess!');
}
else{
  //console.log('Sorry, that was an invalid answer to that question');
  alert('Sorry, that was an invalid answer to that question');
}

//QUESTION 3
let doILikeSweets = prompt('Question 3: Do I like Sweets?  ').toLowerCase();
if (doILikeSweets === 'yes' || doILikeSweets === 'y'){
  //console.log('You are incorrect, I do not like sweets!');
  alert('You are incorrect, I do not like sweets!');
}
else if (doILikeSweets === 'no' || doILikeSweets === 'n'){
  //console.log('Correct! I am not much of a sweets guy.');
  alert('Correct! I am not much of a sweets guy.');
}
else{
  //console.log('Sorry, that was an invalid answer to that question');
  alert('Sorry, that was an invalid answer to that question');
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
}
else{
  //console.log('Sorry, that was an invalid answer to that question');
  alert('Sorry, that was an invalid answer to that question');
}

//console.log('Thank you ' + userName + ', hopefully you know Kirk a bit more!');
alert('Thank you ' + userName + ', hopefully you know Kirk a bit more!');
