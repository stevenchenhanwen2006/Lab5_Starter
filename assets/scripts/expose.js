// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  let horn_selected = document.getElementById("horn-select");
  horn_selected.addEventListener("change", function() {
    let horn_value = horn_selected.value;
    console.log(horn_value);
    change_image(horn_value);
    change_audio(horn_value);
    });

  let horn_button = document.querySelector("#expose button");
  horn_button.addEventListener("click", function() {
    horn_button_click();
  });

  let volume_slider = document.querySelector("#volume-controls input");
  volume_slider.addEventListener("input", function() {
    let volume_value = volume_slider.value;
    change_volume(volume_value);
  });
}

/** 
 * This function changes the image of the horn based on the value of the horn selected
 * @param {*} horn_value the value of the horn selected
*/
function change_image(horn_value) {
  let horn_image = document.querySelector("#expose img");
  if (horn_value == "air-horn") {
    horn_image.src = "assets/images/air-horn.svg";
  } else if (horn_value == "car-horn") {
    horn_image.src = "assets/images/car-horn.svg";
  } else if (horn_value == "party-horn") {
    horn_image.src = "assets/images/party-horn.svg";
  }
}

/**
 * This function changes the audio of the horn based on the value of the horn selected
 * @param {*} horn_value the value of the horn selected
 */
function change_audio(horn_value) {
  let horn_audio = document.querySelector("#expose audio");
  if (horn_value == "air-horn") {
    horn_audio.src = "assets/audio/air-horn.mp3";
  } else if (horn_value == "car-horn") {
    horn_audio.src = "assets/audio/car-horn.mp3";
  } else if (horn_value == "party-horn") {
    horn_audio.src = "assets/audio/party-horn.mp3";
  }
}

/**
 * This function plays the audio of the horn when the button is clicked, and set
 * up the confetti when the party horn is selected
 */
function horn_button_click() {
  let horn_audio = document.querySelector("#expose audio");
  let horn_value = document.getElementById("horn-select").value;
  const jsConfetti = new JSConfetti();
  if (horn_value == "party-horn") {
    jsConfetti.addConfetti();
  }
  horn_audio.play();
}

/**
 * Change the volume of the horn based on the value of the volume slider, and the 
 * volume icon based on the value of the volume slider
 * @param {*} volume_value the value of the volume slider
 */
function change_volume(volume_value) {
  let horn_audio = document.querySelector("#expose audio");
  horn_audio.volume = volume_value / 100;
  let volume_icon = document.querySelector("#volume-controls img");
  if(volume_value == 0){
    volume_icon.src = "assets/icons/volume-level-0.svg";
  } else if(volume_value < 33){
    volume_icon.src = "assets/icons/volume-level-1.svg";
  } else if(volume_value < 67){
    volume_icon.src = "assets/icons/volume-level-2.svg";
  } else {
    volume_icon.src = "assets/icons/volume-level-3.svg";
  }
}