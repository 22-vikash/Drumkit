var numberOfButtons = document.querySelectorAll(".button").length;

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".button")[i].addEventListener("click", function() {
    var buttonStyle = this.innerHTML;
    sound(buttonStyle);
    animation(buttonStyle);
  });
}

document.addEventListener("keypress", function(event) {
  sound(event.key);
  animation(event.key);
});

function sound(key) {
  switch (key) {
    case "Bass Drum":
      var sound1 = new Audio("bassdrum.mp3");
      sound1.play();
      break;
  
    case "Floor Tom":
      var sound2 = new Audio("floordrum.mp3");
      sound2.play();
      break;
  
    case "Snare Drum":
      var sound3 = new Audio("snaredrum.mp3");
      sound3.play();
      break;
  
    case "Tom Tom":
      var sound4 = new Audio("floordrum.mp3");
      sound4.play();
      break;
  
    case "Hi-Hat":
      var sound5 = new Audio("hihat.mp3");
      sound5.play();
      break;
  
    case "Crash Cymbal":
      var sound6 = new Audio("crash.wav");
      sound6.play();
      break;
  
    case "Ride Cymbal":
      var sound7 = new Audio("ride.wav");
      sound7.play();
      break;
  
    default: 
      console.log(key);
  }
}
function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("animation");
  setTimeout(function() {
    activeButton.classList.remove("animation");
  }, 100);

}