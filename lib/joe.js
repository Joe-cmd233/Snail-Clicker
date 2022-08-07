/*! joe.js v0.1 April 13, 2022 */
//this is my code lybrary
//other thing else that you can't and i recomend you never use
var rgb = rgb(random(0,255),random(0,255),random(0,255));

//easy background
//just put the color inside the ()
function b(white) {background('white');}
function b(black) {background('black');}
function b(red) {background('red');}
function b(blue) {background('blue');}
function b(green) {background('green');}
function b(yellow) {background('yellow');}
function b(cyan) {background('cyan');}
function b(pink) {background('pink');}
function b(purple) {background('purple');}
function b(orange) {background('orange');}
function b(rainbow) {background(rgb); }
function b() {background(220);}
function b(prince) {b('purple'); alert('purple rain, purple rain');}
function b(simplyred) {b('red'); alert('something got me starded')}
"example"= ["function draw() {b(white)}"]

//a simple way to:
//if (mouseCliked) {
//  do(something else);
//}
click = onclick;

//fast timer start and fast 
function timerstart() { TimeRanges.start()}
function timerend() { TimeRanges.end()}
"example"= ["function draw() {timerstart() if (timer) }"]

//fast page reload
function resetPage() {window.location.reload()}

//in works page for if you are yet working in the page and you don't want
// the people having problem in the page and just use this as a sample.
function inWorks() {alert("This part isn’t ready enough." +
 "So if you want to continue your journey try again later!" +
    "Thank you for understanding! 😊👌");
}

//it make every type of message apears including console logs,errors and even popups
function geralAlert(message) {
  alert(message);
  console.error(message);
  console.log(message);
}