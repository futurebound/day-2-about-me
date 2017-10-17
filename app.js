'use strict';

var user = prompt('Welcome, freind! I appreciate that you have an interest in myself. Would you be so kind as to share your name?');
console.log('user name:', user);

alert('Good to know you, ' + user + ' c: I\'ve got an idea. On a whim, I feel like sharing a little bit about me since you took the time to come here. I\'m partial to games though, so please humor me and make a couple guesses. To keep it easier on us both for now, these will all be yes or no questions. Please answer accordingly!');

var lodging = prompt(user + ', do you feel that I\'d be interested in living out of a converted van or tiny home?');
console.log('preferred residence? ', lodging);

if (lodging.toLowerCase() === 'y' || lodging.toLowerCase() === 'yes') {
  alert('Correct! Lucky or perceptive? I guess we\'ll find out shortly... Round 2!');
} else {
  alert('Nope! No worries, coin flips are coin flips. Round 2!');
}

var arizona = prompt(user + ', do you feel like I\'m planning on living in Arizona one day?');
console.log('dream of desert?', arizona);

if (arizona.toLowerCase() === 'y' || arizona.toLowerCase() === 'yes') {
  alert('What?? Well I can\'t blame you for guessing that. I like water, water, and more water. Not the place for me. OK! Round 3, this should get much easier shortly.');
} else {
  alert('Good guess! I can\'t imagine how awful it would be to roast in the desert all day without AC or a big, airy home to keep me cool. OK! Round 3, this should get much easier shortly.');
}

var yoga = prompt(user + ', based off what you learned last time, do you thnk I\'m one to enjoy 105+ Farenheit hatha yoga?');
console.log('yogi? ', yoga);

if (yoga.toLowerCase() === 'y' || yoga.toLowerCase() === 'yes') {
  alert('Nice! I tried to trick you there, but you\'re apparently not one to be fooled so easily. Moving on...');
} else {
  alert('Ha! Tricked you. I might be avoidant of the lack of water for extended periods of time, but I actually love heat in controlled settings. Plus, with 90 minutes of that stuff, you\'re basically the source of your own personal lake. Moving on...');
}

var yoga = prompt(user + ', ');
console.log('yogi? ', yoga);

//var g5 = prompt(user + ', ');
//console.log()
