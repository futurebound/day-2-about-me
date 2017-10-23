'use strict';

var guessedCorrect = 0;

function question1(){
  // first question
  var lodging = prompt(user + ', do you feel that I\'d be interested in living out of a converted van or tiny home?');
  console.log('preferred residence? ', lodging);

  // validation that runs if user enters y/yes
  if (lodging.toLowerCase() === 'y' || lodging.toLowerCase() === 'yes') {
    alert('Correct! Lucky or perceptive? I guess we\'ll find out shortly... Round 2!');
    guessedCorrect++;

  // validation that runs if user enters anything else
  } else {
    alert('Nope! No worries, coin flips are coin flips. Round 2!');
  }
}

function question2(){
  // 2nd question
  var arizona = prompt(user + ', do you feel like I\'m planning on living in Arizona one day?');
  console.log('dream of desert?', arizona);

  // 2nd question
  if (arizona.toLowerCase() === 'y' || arizona.toLowerCase() === 'yes') {
    alert('What?? Well I can\'t blame you for guessing that. I like water, water, and more water. Not the place for me. OK! Round 3, this should get much easier shortly.');

  // Q2 validation that runs if user enters anything else
  } else {
    alert('Good guess! I can\'t imagine how awful it would be to roast in the desert all day without AC or a big, airy home to keep me cool. OK! Round 3, this should get much easier shortly.');
    guessedCorrect++;
  }
}

function question3(){
  // 3rd question
  var yoga = prompt(user + ', based off what you learned last time, do you think I\'m one to enjoy 105+ Farenheit hatha yoga?');
  console.log('yogi? ', yoga);

  // 3rd question validation if user enters y or yes
  if (yoga.toLowerCase() === 'y' || yoga.toLowerCase() === 'yes') {
    alert('Nice! I tried to trick you there, but you\'re apparently not one to be fooled so easily. Moving on...');
    guessedCorrect++;

  // Q3 validation that runs if user enters anything else
  } else {
    alert('Ha! Tricked you. I might be avoidant of the lack of water for extended periods of time, but I actually love heat in controlled settings. Plus, with 90 minutes of that stuff, you\'re basically the source of your own personal lake. Moving on...');
  }
}

function question4(){
  // 4th question
  var iceAxe = prompt(user + ', how about whether I\'ve self-arrested down snow faces on mountains with an ice axe?');
  console.log('...self-arrest with ice axe? ', iceAxe);

  // 4th question validation if user enters y or yes
  if (iceAxe.toLowerCase() === 'y' || iceAxe.toLowerCase() === 'yes') {
    alert('Ooh, you knew I was a purely rectreational mountaineer?? Good guess, although it was much less exciting than it sounds. Final question!');
    guessedCorrect++;

  // 4th question validation if user enters anything else
  } else {
    alert('Come on, you didn\'t assume I was a purely rectreational mountaineer? I definitely have, although it was much less exciting than it sounds. Final question!');
  }
}

function question5(){
  // 5th question
  var entity = prompt(user + ', this might sound strange, but am I a digital entity?');
  console.log('entity: ', entity);
  guessedCorrect++;

  // 5th question response regardless of input
  alert('You\'re correct!! :D What gave me away?? Moving on... These next few questions are going to shift away from Y/N.');
}

// declaring variables for upcoming loop
function question6(){

  var birthday;
  var counter = 0;
  var answer6 = false;

  // while loop to give user 4 chances
  while (birthday !== 13 && counter < 4) {
    birthday = parseInt(prompt('What day of the month was I born? I\'ll give you 4 guesses!'));
    counter++;
    console.log('guessed: ', birthday);
    console.log('guess #: ', counter);

    // if loop that determines whether the guess was higher/lower or correct (which breaks loop)
    if (birthday === 13) {
      answer6 = true;
      break;
    } else if (birthday < 13) {
      alert('Nope! Too low c:');
    } else if (birthday > 13) {
      alert('Nope! Too high c:');
      // ADD IN ANOTHER TO CHECK IF THERE ANSWER IS NaN or null and prompt to
    }
  }

  if (answer6 === true) {
    alert('Congrats, you got it! I\'m no guru but your 3rd eye might be open!');
    guessedCorrect++;
  } else {
    alert('Out of guesses! Nice try, your odds were pretty awful anyways.');
  }
}

// question7
function question7(){
  // 7th question variables
  var cities = ['cabo san lucas', 'cancun', 'tulum', 'mexico city', 'tijuana'];
  var response;
  var guesses = 0;
  var correct = false;

  while (guesses < 6) {
    response = prompt('What\'s a city in Mexico that I\'ve visited?');
    console.log('response:', response);
    if (cities.includes(response.toLowerCase())) {
      correct = true;
      break;
    } else {
      alert('Nope! Guess again.');
      guesses++;
    }
  }

  if (correct === true) {
    alert('WOW nice job! They were all tourist destinations FYI. The possible answers were Cabo (san lucas), Cancun, and Tulum.');
    guessedCorrect++;
  } else {
    alert('EHHH out of guesses. They were all tourist destinations FYI. The possible answers were Cabo (san lucas), Cancun, and Tulum.');
  }
}

// getting user name
var user = prompt('Welcome, friend! I appreciate that you have an interest in myself. Would you be so kind as to share your name?');
console.log('user name:', user);

// validation of user name entry
alert('Good to know you, ' + user + ' c: I\'ve got an idea. On a whim, I feel like sharing a little bit about me since you took the time to come here. I\'m partial to games though, so please humor me and make a couple guesses. To keep it easier on us both for now, these will all be yes or no questions. Please answer accordingly!');

//running all of the functions in order
question1();
question2();
question3();
question4();
question5();
alert ('I\'d like to test your 6th sense now... Tune into my vibration as well as you are able. I\'m going to give you four guesses to determine which day of the month I was born. It was in August if that makes it easier to feel. Relax, I\'ll give you some hints too :]');
question6();
alert('OK! One last question. This is a little more difficult than the others, so you get 6 total guesses. There are a couple correct answers, however. The question is...');
question7();
alert ('Thanks for stopping by and playing some pointless games with me. Just FYI, you got ' + guessedCorrect + ' out of 7 questions correct. As another pointless gift from me to you, here\'s a page with more than enough personal information for one day. Love you friend, be well!');
