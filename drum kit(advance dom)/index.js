
//Mouse
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var button = this.innerHTML;
    makeSound(button);
    anime(button);
  });
}


//Keyboard
document.addEventListener("keydown",function(e){
  //keyboard event addEventListener stores key pressed
  var button = e.key;
  makeSound(button);
  anime(button);
});


//Sound
function makeSound(btn){
  switch (btn) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
    console.log(button);
  }
}


//To animate button
function anime(btn){
  var activeButton = document.querySelector("." + btn);

  // it make button pressed
  activeButton.classList.add("pressed");


  //to give hover feel keep timer
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
