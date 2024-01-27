//function for button clicked
var drumNumbers = document.querySelectorAll(".butt").length;
for (var i = 0; i < drumNumbers; i++) {
  var clickedButton = document.querySelectorAll(".butt")[i];
  clickedButton.addEventListener("click", buttonForAll);

  function buttonForAll() {
    this.classList.add("em");
  }
}
//button 1
document.querySelector(".hey").addEventListener("click", buttonClick);
function buttonClick() {
  document.querySelector(".hi").classList.remove("em");
  document.querySelector(".chief").classList.remove("em");
  document.querySelector(".hello").classList.remove("em");
  document.querySelector(".yo").classList.remove("em");
  var audio = new Audio("Hey.mp3");
  audio.play();
}
//button 2
document.querySelector(".hi").addEventListener("click", buttonClick1);
function buttonClick1() {
  document.querySelector(".hey").classList.remove("em");
  document.querySelector(".chief").classList.remove("em");
  document.querySelector(".hello").classList.remove("em");
  document.querySelector(".yo").classList.remove("em");
  var audio = new Audio("Hi.mp3");
  audio.play();
}
//button 3
document.querySelector(".hello").addEventListener("click", buttonClick2);
function buttonClick2() {
  document.querySelector(".hi").classList.remove("em");
  document.querySelector(".chief").classList.remove("em");
  document.querySelector(".hey").classList.remove("em");
  document.querySelector(".yo").classList.remove("em");
  var audio = new Audio("Hello.mp3");
  audio.play();
}
//button 4
document.querySelector(".yo").addEventListener("click", buttonClick3);
function buttonClick3() {
  document.querySelector(".hi").classList.remove("em");
  document.querySelector(".chief").classList.remove("em");
  document.querySelector(".hello").classList.remove("em");
  document.querySelector(".hey").classList.remove("em");
  var audio = new Audio("Yo.mp3");
  audio.play();
}
//button 5
document.querySelector(".chief").addEventListener("click", buttonClick4);
function buttonClick4() {
  document.querySelector(".hi").classList.remove("em");
  document.querySelector(".yo").classList.remove("em");
  document.querySelector(".hello").classList.remove("em");
  document.querySelector(".hey").classList.remove("em");
  var audio = new Audio("Chief.mp3");
  audio.play();
}

// Keyboard press
document.addEventListener("keydown", function (clicked) {
  makeSound(clicked.key);
});

function makeSound(key) {
  switch (key) {
    //button 1
    case "a":
      let heyKey = document.querySelector(".hey");
      heyKey.classList.add("em");
      var hey = new Audio("Hey.mp3");
      hey.play();
      document.querySelector(".hi").classList.remove("em");
      document.querySelector(".chief").classList.remove("em");
      document.querySelector(".hello").classList.remove("em");
      document.querySelector(".yo").classList.remove("em");
      break;
    //button 2
    case "b":
      let hiKey = document.querySelector(".hi");
      hiKey.classList.add("em");
      var hi = new Audio("Hi.mp3");
      hi.play();
      document.querySelector(".hey").classList.remove("em");
      document.querySelector(".chief").classList.remove("em");
      document.querySelector(".hello").classList.remove("em");
      document.querySelector(".yo").classList.remove("em");
      break;
    //button 3
    case "h":
      let helloKey = document.querySelector(".hello");
      helloKey.classList.add("em");
      var hello = new Audio("Hello.mp3");
      hello.play();
      document.querySelector(".hi").classList.remove("em");
      document.querySelector(".chief").classList.remove("em");
      document.querySelector(".hey").classList.remove("em");
      document.querySelector(".yo").classList.remove("em");
      break;
    //button 4
    case "y":
      let yoKey = document.querySelector(".yo");
      yoKey.classList.add("em");
      var yo = new Audio("Yo.mp3");
      yo.play();
      document.querySelector(".hi").classList.remove("em");
      document.querySelector(".chief").classList.remove("em");
      document.querySelector(".hello").classList.remove("em");
      document.querySelector(".hey").classList.remove("em");
      break;
    //button 5
    case "c":
      let chiefKey = document.querySelector(".chief");
      chiefKey.classList.add("em");
      var chief = new Audio("Chief.mp3");
      chief.play();
      document.querySelector(".hi").classList.remove("em");
      document.querySelector(".hey").classList.remove("em");
      document.querySelector(".hello").classList.remove("em");
      document.querySelector(".yo").classList.remove("em");
  }
}

function toggleMode() {
  var element = document.body;
  element.classList.toggle("dark");
}

//Extras//
// var audio = new Audio('test.3gpp.mp3')
// audio.play;
// alert ("my name is")
// alert(drumNumbers);
// var audio = new Audio('sounds/tom-1.mp3')
