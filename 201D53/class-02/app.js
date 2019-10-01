console.log('i am alive');
var number = 4;
var string = 'string';
var boolean = true;

var likesStrangerThings = prompt('Hello, do you like stranger things?');
likesStrangerThings = likesStrangerThings.toUpperCase();

if(likesStrangerThings === 'YES') {
  alert('Yah me too!');
} else {
  alert('Go watch it!');
}

if(typeof string === 'string') {
  alert('i am a string');
}